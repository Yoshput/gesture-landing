/**
 * UI Components Library - GestureFlow
 * Reusable UI components with TailwindCSS styling
 */

/**
 * Create a button component
 */
export function createButton(text, options = {}) {
    const {
        onClick = () => {},
        variant = 'primary', // primary, secondary, danger, success
        size = 'md', // sm, md, lg
        disabled = false,
        icon = null,
        className = ''
    } = options;

    const button = document.createElement('button');
    button.textContent = text;
    button.disabled = disabled;

    // Base styles
    const baseClasses = 'font-semibold rounded-lg transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Variant styles
    const variantClasses = {
        primary: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50',
        secondary: 'bg-gray-700 text-white hover:bg-gray-600',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
        ghost: 'bg-transparent border border-gray-600 text-white hover:border-gray-400'
    };

    // Size styles
    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3 text-lg'
    };

    button.className = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;
    
    button.addEventListener('click', onClick);

    return button;
}

/**
 * Create a card component
 */
export function createCard(title, content, options = {}) {
    const {
        icon = null,
        footer = null,
        className = ''
    } = options;

    const card = document.createElement('div');
    card.className = `glass-dark rounded-xl p-6 border border-blue-400/30 ${className}`;

    const header = document.createElement('div');
    header.className = 'mb-4';

    if (icon) {
        const iconEl = document.createElement('div');
        iconEl.className = 'text-4xl mb-2';
        iconEl.textContent = icon;
        header.appendChild(iconEl);
    }

    const titleEl = document.createElement('h3');
    titleEl.className = 'text-xl font-semibold text-white';
    titleEl.textContent = title;
    header.appendChild(titleEl);

    card.appendChild(header);

    const contentEl = document.createElement('div');
    contentEl.className = 'text-gray-300 mb-4';
    if (typeof content === 'string') {
        contentEl.textContent = content;
    } else {
        contentEl.appendChild(content);
    }
    card.appendChild(contentEl);

    if (footer) {
        const footerEl = document.createElement('div');
        footerEl.className = 'pt-4 border-t border-gray-700 flex gap-2';
        if (typeof footer === 'string') {
            footerEl.textContent = footer;
        } else {
            footerEl.appendChild(footer);
        }
        card.appendChild(footerEl);
    }

    return card;
}

/**
 * Create a modal component
 */
export function createModal(title, content, options = {}) {
    const {
        buttons = [],
        onClose = () => {},
        size = 'md' // sm, md, lg
    } = options;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg'
    };

    const modalContent = document.createElement('div');
    modalContent.className = `glass-dark rounded-2xl border border-blue-400/30 p-6 ${sizeClasses[size] || sizeClasses.md} w-full mx-4`;

    // Header
    const header = document.createElement('div');
    header.className = 'flex justify-between items-center mb-4';

    const titleEl = document.createElement('h2');
    titleEl.className = 'text-2xl font-bold text-white';
    titleEl.textContent = title;
    header.appendChild(titleEl);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'text-gray-400 hover:text-white transition';
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', () => {
        modal.remove();
        onClose();
    });
    header.appendChild(closeBtn);

    modalContent.appendChild(header);

    // Content
    const contentEl = document.createElement('div');
    contentEl.className = 'text-gray-300 mb-6';
    if (typeof content === 'string') {
        contentEl.textContent = content;
    } else {
        contentEl.appendChild(content);
    }
    modalContent.appendChild(contentEl);

    // Buttons
    if (buttons.length > 0) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'flex gap-3 justify-end';
        
        buttons.forEach(btn => {
            buttonsContainer.appendChild(btn);
        });

        modalContent.appendChild(buttonsContainer);
    }

    modal.appendChild(modalContent);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            onClose();
        }
    });

    return modal;
}

/**
 * Show toast notification
 */
export function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    
    const typeClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };

    toast.className = `fixed bottom-4 right-4 ${typeClasses[type] || typeClasses.info} text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn z-50`;
    toast.textContent = message;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}

/**
 * Create a stat card
 */
export function createStatCard(label, value, trend = null) {
    const card = document.createElement('div');
    card.className = 'glass-dark rounded-lg p-4 border border-blue-400/20';

    const labelEl = document.createElement('p');
    labelEl.className = 'text-gray-400 text-sm mb-1';
    labelEl.textContent = label;
    card.appendChild(labelEl);

    const valueContainer = document.createElement('div');
    valueContainer.className = 'flex items-center gap-2';

    const valueEl = document.createElement('span');
    valueEl.className = 'text-3xl font-bold gradient-text';
    valueEl.textContent = value;
    valueContainer.appendChild(valueEl);

    if (trend) {
        const trendEl = document.createElement('span');
        trendEl.className = trend.type === 'up' ? 'text-green-400 text-sm' : 'text-red-400 text-sm';
        trendEl.textContent = trend.type === 'up' ? '↑' : '↓' + ' ' + trend.value;
        valueContainer.appendChild(trendEl);
    }

    card.appendChild(valueContainer);

    return card;
}

/**
 * Create a progress bar
 */
export function createProgressBar(value, max = 100, options = {}) {
    const {
        label = null,
        showPercentage = true,
        color = 'blue'
    } = options;

    const container = document.createElement('div');
    container.className = 'w-full';

    if (label) {
        const labelEl = document.createElement('p');
        labelEl.className = 'text-sm text-gray-400 mb-2';
        labelEl.textContent = label;
        container.appendChild(labelEl);
    }

    const progressContainer = document.createElement('div');
    progressContainer.className = 'w-full bg-gray-700 rounded-full h-3 overflow-hidden';

    const colorClasses = {
        blue: 'bg-gradient-to-r from-blue-500 to-blue-400',
        green: 'bg-gradient-to-r from-green-500 to-green-400',
        red: 'bg-gradient-to-r from-red-500 to-red-400',
        purple: 'bg-gradient-to-r from-purple-500 to-purple-400'
    };

    const progress = document.createElement('div');
    progress.className = `h-full ${colorClasses[color] || colorClasses.blue} transition-all duration-300`;
    progress.style.width = `${Math.min(value / max * 100, 100)}%`;

    progressContainer.appendChild(progress);
    container.appendChild(progressContainer);

    if (showPercentage) {
        const percentEl = document.createElement('p');
        percentEl.className = 'text-xs text-gray-400 mt-1';
        percentEl.textContent = `${Math.round(value / max * 100)}%`;
        container.appendChild(percentEl);
    }

    return container;
}

/**
 * Create a badge component
 */
export function createBadge(text, options = {}) {
    const {
        variant = 'default', // default, success, warning, danger, info
        size = 'md' // sm, md, lg
    } = options;

    const badge = document.createElement('span');

    const variantClasses = {
        default: 'bg-gray-700 text-gray-200',
        success: 'bg-green-500/20 text-green-400',
        warning: 'bg-yellow-500/20 text-yellow-400',
        danger: 'bg-red-500/20 text-red-400',
        info: 'bg-blue-500/20 text-blue-400'
    };

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base'
    };

    badge.className = `inline-block rounded-full font-semibold ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.md}`;
    badge.textContent = text;

    return badge;
}

/**
 * Create a skeleton loader
 */
export function createSkeleton(options = {}) {
    const {
        lines = 3,
        width = '100%',
        height = '20px'
    } = options;

    const container = document.createElement('div');
    container.className = 'space-y-3';

    for (let i = 0; i < lines; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-pulse';
        skeleton.style.width = width;
        skeleton.style.height = height;
        
        if (i === lines - 1) {
            skeleton.style.width = '70%';
        }
        
        container.appendChild(skeleton);
    }

    return container;
}

export default {
    createButton,
    createCard,
    createModal,
    showToast,
    createStatCard,
    createProgressBar,
    createBadge,
    createSkeleton
};
