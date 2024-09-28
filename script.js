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

  // Manejar el cambio de visibilidad de la página
  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          document.body.classList.add('hidden');
          document.body.classList.remove('visible');
      } else {
          document.body.classList.add('visible');
          document.body.classList.remove('hidden');
      }
  });
});
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

  // Manejar el cambio de visibilidad de la página
  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          document.body.classList.add('hidden');
          document.body.classList.remove('visible');
      } else {
          document.body.classList.add('visible');
          document.body.classList.remove('hidden');
      }
  });

  // Scroll animations
  const scrollElements = document.querySelectorAll('.scroll-animation');

  const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
          elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
  };

  const displayScrollElement = (element) => {
      element.classList.add('visible');
  };

  const hideScrollElement = (element) => {
      element.classList.remove('visible');
  };

  const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
          if (elementInView(el, 1.25)) {
              displayScrollElement(el);
          } else {
              hideScrollElement(el);
          }
      });
  };

  window.addEventListener('scroll', () => {
      handleScrollAnimation();
  });

  // Inicializar la animación en los elementos visibles al cargar la página
  handleScrollAnimation();
});// scripts.js
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

    // Manejar el cambio de visibilidad de la página
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('hidden');
            document.body.classList.remove('visible');
        } else {
            document.body.classList.add('visible');
            document.body.classList.remove('hidden');
        }
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Inicializar la animación en los elementos visibles al cargar la página
    handleScrollAnimation();
});