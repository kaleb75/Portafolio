// scripts.js

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Form validation
const form = document.querySelector('form');
if (form) {  // Check if the form exists
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// WhatsApp button click event
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) { // Check if the WhatsApp button exists
    whatsappBtn.addEventListener('click', function() {
        alert('You will be redirected to WhatsApp.');
    });
}

// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const whatsappBtn = document.getElementById("whatsappBtn");
    whatsappBtn.addEventListener("click", function() {
        alert("You will be redirected to WhatsApp to contact me!");
    });
});
