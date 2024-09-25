// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Mostrar el botón cuando se hace scroll
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.classList.add('show'); // Añadir clase para mostrar
      } else {
          scrollToTopBtn.classList.remove('show'); // Quitar clase para ocultar
      }
  };

  // Función para volver al tope de la página
  scrollToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };



    // Form validation
    const form = document.querySelector('form');
    if (form) {
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
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            alert('You will be redirected to WhatsApp.');
        });
    }
});

const scrollToTopBtn = document.querySelector('#scroll-to-top-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mostrar el botón cuando se desplace hacia abajo
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollToTopBtn').classList.add('show'); // Añadir clase para mostrar
  } else {
      document.getElementById('scrollToTopBtn').classList.remove('show'); // Quitar clase para ocultar
  }
};

// Función para volver al tope de la página
document.getElementById('scrollToTopBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};