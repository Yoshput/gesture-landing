/**
 * Service Worker - GestureFlow
 * Handles offline support, caching, and background sync
 */

const CACHE_NAME = 'gestureflow-v1';
const RUNTIME_CACHE = 'gestureflow-runtime-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/landing.html',
  '/app.html',
  '/manifest.json',
  '/src/utils/helpers.js',
  '/src/services/speechService.js',
  '/src/services/gestureService.js',
  '/src/services/storageService.js',
  '/src/components/uiComponents.js',
  '/src/data/gestureLibrary.js',
  '/src/data/achievements.js'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different request types
  if (request.method === 'GET') {
    event.respondWith(handleGetRequest(request));
  } else if (request.method === 'POST') {
    event.respondWith(handlePostRequest(request));
  }
});

/**
 * Handle GET requests
 */
async function handleGetRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);

  try {
    // Try network first for dynamic content
    const response = await fetch(request);
    
    // Cache successful responses
    if (response && response.status === 200 && response.type !== 'error') {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    // Fall back to cache if network fails
    console.log('[ServiceWorker] Network request failed, using cache:', request.url);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }

    // Return offline page if available
    return caches.match('/offline.html') 
      || new Response('Offline - Page not available', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      });
  }
}

/**
 * Handle POST requests (background sync)
 */
async function handlePostRequest(request) {
  try {
    // Try to send to network
    const response = await fetch(request);
    return response;
  } catch (error) {
    console.log('[ServiceWorker] POST request failed, queuing for sync:', request.url);
    
    // Queue for background sync
    if (self.registration.sync) {
      await self.registration.sync.register('sync-posts');
    }

    // Return offline response
    return new Response(
      JSON.stringify({ offline: true, queued: true }),
      {
        status: 202,
        statusText: 'Accepted',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    );
  }
}

/**
 * Background sync event
 */
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync triggered:', event.tag);
  
  if (event.tag === 'sync-posts') {
    event.waitUntil(syncPendingRequests());
  }
});

/**
 * Sync pending POST requests
 */
async function syncPendingRequests() {
  try {
    // Get pending requests from storage
    const cache = await caches.open(RUNTIME_CACHE);
    const requests = await cache.keys();

    for (const request of requests) {
      if (request.method === 'POST') {
        try {
          await fetch(request);
          await cache.delete(request);
        } catch (error) {
          console.error('[ServiceWorker] Failed to sync request:', request.url);
        }
      }
    }
  } catch (error) {
    console.error('[ServiceWorker] Sync error:', error);
  }
}

/**
 * Push notification event (for future notifications)
 */
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body || 'GestureFlow Notification',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: data.data || {}
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'GestureFlow', options)
  );
});

/**
 * Notification click event
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Check if there's already a window open
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open new window
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

/**
 * Periodic sync event (for future periodic updates)
 */
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-stats') {
    event.waitUntil(updateAppStats());
  }
});

/**
 * Periodic update function
 */
async function updateAppStats() {
  try {
    const response = await fetch('/api/stats');
    const data = await response.json();
    
    // Broadcast update to all clients
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'STATS_UPDATE',
        data: data
      });
    });
  } catch (error) {
    console.error('[ServiceWorker] Update stats error:', error);
  }
}

// Log when service worker is ready
self.addEventListener('controllerchange', () => {
  console.log('[ServiceWorker] Controller change - new service worker is active');
});

console.log('[ServiceWorker] Service Worker loaded and ready');
