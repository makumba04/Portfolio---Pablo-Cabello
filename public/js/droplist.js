// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('nav-button');
    const nav = document.querySelector('nav');
    
    if (navButton && nav) {
        navButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up
            this.classList.toggle('is-active');
            nav.classList.toggle('active');
            nav.style.width = "100%";
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('#navbar .bn632-hover');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                navButton.classList.remove('is-active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !navButton.contains(event.target)) {
                nav.classList.remove('active');
                navButton.classList.remove('is-active');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                nav.classList.remove('active');
                navButton.classList.remove('is-active');
            }
        });
    }
});