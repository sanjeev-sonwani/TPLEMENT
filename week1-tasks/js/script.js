// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
});

// Form Validation
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If everything is valid, submit the form (in a real-world scenario, you'd probably use an AJAX call here)
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}

function validateEmail(email) {
    // Simple email validation regex
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
