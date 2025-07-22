// Show a welcome message on the home page
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/Bus Booking Website/') {
    setTimeout(() => {
      alert('Welcome to Bus Booking! 🚍\nBook your next journey with ease.');
    }, 400);
  }

  // Contact form confirmation
  const contactForm = document.querySelector('form');
  if (contactForm && window.location.pathname.includes('contact.html')) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Smooth scroll for nav links (if using anchors in the future)
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});