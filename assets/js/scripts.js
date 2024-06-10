document.addEventListener('DOMContentLoaded', function() {
    const scrollyButtons = document.querySelectorAll('.scrolly');

    scrollyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
