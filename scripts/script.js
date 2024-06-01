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

    // Overlay functionality for project items
    const projectsItem = document.querySelectorAll("[data-projects-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    // modal variable
    // const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalVideo = document.querySelector("[data-modal-video]");
    const modalText = document.querySelector("[data-modal-text]");

    // modal toggle function
    const projectsModalFunc = function () {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");

        if (!modalContainer.classList.contains("active")) {
            // Stop the video when the modal is closed
            modalVideo.pause();
            modalVideo.src = '';
        }
    }

    // add click event to all modal items
    for (let i = 0; i < projectsItem.length; i++) {

        projectsItem[i].addEventListener("click", function () {

            // modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
            // modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
            modalTitle.innerHTML = this.querySelector("[data-projects-title]").innerHTML;
            modalVideo.src = this.querySelector("[data-projects-video]").src;
            modalVideo.play(); // Play the video automatically
            modalText.innerHTML = this.querySelector("[data-projects-text]").innerHTML;

            projectsModalFunc();

        });
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener("click", projectsModalFunc);
    overlay.addEventListener("click", projectsModalFunc);
});