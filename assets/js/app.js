// Glixtron Main Application JavaScript
console.log('Glixtron Enterprise Platform v1.0 initialized');

// Global state
const AppState = {
    isLoggedIn: false,
    deploymentStatus: 'active',
    performance: 99.8,
    lastUpdate: new Date()
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing dashboard...');
    
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize components
    initLoginModal();
    initDashboard();
    initEventListeners();
    
    // Start auto-update
    startAutoUpdate();
});

// Login Modal
function initLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const enterBtn = document.getElementById('enterDashboard');
    
    if (loginModal && enterBtn) {
        // Show modal
        loginModal.style.display = 'flex';
        
        // Auto-enter after 8 seconds
        setTimeout(() => {
            if (loginModal.style.display === 'flex') {
                enterDashboard();
            }
        }, 8000);
        
        // Enter button click
        enterBtn.addEventListener('click', enterDashboard);
    }
}

// Enter Dashboard
function enterDashboard() {
    const loginModal = document.getElementById('loginModal');
    const dashboard = document.getElementById('dashboard');
    
    if (loginModal) {
        loginModal.style.animation = 'fadeOut 0.5s forwards';
        
        setTimeout(() => {
            loginModal.style.display = 'none';
            
            if (dashboard) {
                dashboard.style.display = 'block';
                dashboard.style.animation = 'fadeIn 0.5s';
                AppState.isLoggedIn = true;
                
                // Update dashboard data
                updateDashboardData();
            }
        }, 500);
    }
}

// Initialize Dashboard
function initDashboard() {
    console.log('Dashboard initialized');
    
    // Set initial timestamp
    updateTimestamp();
    
    // Update live data
    updateLiveData();
}

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    const timestampElements = document.querySelectorAll('.timestamp');
    
    timestampElements.forEach(el => {
        el.textContent = now.toLocaleString();
    });
}

// Update dashboard data
function updateDashboardData() {
    // Update deployment status
    const statusElement = document.getElementById('deploymentStatus');
    if (statusElement) {
        statusElement.textContent = AppState.deploymentStatus;
    }
    
    // Update performance
    const performanceElement = document.getElementById('performanceValue');
    if (performanceElement) {
        performanceElement.textContent = AppState.performance + '%';
    }
}

// Update live data
function updateLiveData() {
    // Simulate live data updates
    setInterval(() => {
        updateTimestamp();
        
        // Random performance fluctuation (for demo)
        const fluctuation = (Math.random() - 0.5) * 0.2;
        AppState.performance = Math.min(100, Math.max(99.5, 99.8 + fluctuation));
        
        updateDashboardData();
    }, 30000); // Update every 30 seconds
}

// Initialize event listeners
function initEventListeners() {
    // Quick action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('Action triggered:', action);
            alert(`Action "${action}" triggered (demo mode)`);
        });
    });
    
    // Deploy button
    const deployBtn = document.getElementById('deployBtn');
    if (deployBtn) {
        deployBtn.addEventListener('click', function() {
            console.log('Deployment triggered');
            alert('Deployment initiated. This would trigger GitHub Actions in production.');
        });
    }
}

// Start auto-update
function startAutoUpdate() {
    // Update timestamp every minute
    setInterval(updateTimestamp, 60000);
}

// Export functions if needed
window.Glixtron = {
    enterDashboard,
    updateTimestamp,
    updateDashboardData
};
