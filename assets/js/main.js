document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const body = document.body;
    const sidebarOverlay = document.createElement('div');
    
    // Add sidebar overlay for mobile
    sidebarOverlay.className = 'sidebar-overlay';
    document.body.appendChild(sidebarOverlay);

    // Toggle Sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                body.classList.toggle('sidebar-open');
                body.classList.remove('sidebar-collapsed');
            } else {
                body.classList.toggle('sidebar-collapsed');
                body.classList.remove('sidebar-open');
            }
        });
    }

    // Close sidebar when clicking overlay
    sidebarOverlay.addEventListener('click', () => {
        body.classList.remove('sidebar-open');
    });

    // Close sidebar on window resize if it's open and screen becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            body.classList.remove('sidebar-open');
        }
    });

    // Add search shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.search-box input')?.focus();
        }
    });
});
