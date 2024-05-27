window.addEventListener('scroll', function () {
    if (window.scrollY > 10) { // Adjust scroll value as needed
        document.body.classList.add('show-navbar');
    } else {
        document.body.classList.remove('show-navbar');
    }
});
