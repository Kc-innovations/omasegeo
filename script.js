/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {

  navLinks.classList.toggle('show');

  menuToggle.textContent =
    navLinks.classList.contains('show') ? '×' : '☰';

});


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('show');
    menuToggle.textContent = '☰';

  });

});


/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});


document.querySelectorAll('.reveal').forEach(element => {

  observer.observe(element);

});


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {

  event.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const service = document.getElementById('service').value;

  const message = document.getElementById('message').value.trim();


  const subject = encodeURIComponent(
    'Website Enquiry - ' + service
  );


  const body = encodeURIComponent(

    'Name: ' + name + '\n' +

    'Email: ' + email + '\n' +

    'Service: ' + service + '\n\n' +

    'Message:\n' + message

  );


  window.location.href =
    'mailto:contact@omasegeo.com?subject=' +
    subject +
    '&body=' +
    body;

});


/* =================================
   AUTOMATIC COPYRIGHT YEAR
================================= */

document.getElementById('year').textContent =
  new Date().getFullYear();