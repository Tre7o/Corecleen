const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// show the button, after user scrolls down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Modal functionality
const modal = document.querySelector('.modal__container');
const ctaBtn = document.getElementById('cta');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('early-access-form');

// Show modal when CTA button is clicked
ctaBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Hide modal when close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Hide modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Here you can add code to send the email to your server or API
    alert(`Thank you for signing up! We'll send early access to ${email}`);
    modal.style.display = 'none';
    form.reset();
});