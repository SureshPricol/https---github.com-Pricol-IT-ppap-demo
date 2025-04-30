document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle, #sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const body = document.body;

    // Toggle sidebar
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event from bubbling
        sidebar.classList.toggle('collapsed');
        sidebar.classList.toggle('sidebar-hidden');
        mainContent.classList.toggle('expanded');
        body.classList.toggle('sidebar-hidden');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        const isMobile = window.innerWidth <= 768;
        const clickedOutsideSidebar = !sidebar.contains(e.target);
        const clickedOutsideToggle = !menuToggle.contains(e.target);

        if (isMobile && clickedOutsideSidebar && clickedOutsideToggle) {
            sidebar.classList.remove('active');
            sidebar.classList.remove('sidebar-hidden');
            mainContent.classList.remove('expanded');
            body.classList.remove('sidebar-hidden');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('collapsed');
            sidebar.classList.remove('sidebar-hidden');
            mainContent.classList.remove('expanded');
            body.classList.remove('sidebar-hidden');
        }
    });
});