window.addEventListener('scroll', function () {
    if (window.scrollY > 10) { // Adjust scroll value as needed
        document.body.classList.add('show-navbar');
    } else {
        document.body.classList.remove('show-navbar');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-link');

    // Function to handle click on nav links
    function handleNavClick(event) {
        // Prevent default link behavior
        // event.preventDefault();

        // Remove 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('current');
        });

        // Add 'active' class to clicked link
        event.target.classList.add('current');
    }

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    function updateNavbarLink() {
        const scrollPosition = window.scrollY; // Get current scroll position

        // Loop through each section to find the one in view
        document.querySelectorAll('article').forEach(section => {
            const sectionId = section.id;
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in view (within the viewport)
            if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
                // Remove 'current' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('current');
                });

                // Add 'current' class to corresponding navbar link
                document.querySelector(`.navbar-link[href="#${sectionId}"]`).classList.add('current');
            }
        });
    }

    // Add scroll event listener to window
    window.addEventListener('scroll', updateNavbarLink);
});