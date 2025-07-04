// script.js

// Mobile Toggle
const navLinks = document.querySelector('.nav-links');
document.querySelector('.hamburger').addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});

// Typed.js Hero Text
new Typed('#typed', {
  strings: [
    'Welcome to ArzCollection — Where Fashion Meets Futurism.',
    'Explore our limited-edition shirts, T-shirts, umbrellas & jackets.'
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Filter Products
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    cards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
    });
  });
});

// Lightbox Modal
function showModal(img) {
  const box = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-title').textContent = img.nextElementSibling.textContent;
  document.getElementById('lightbox-price').textContent = img.parentElement.querySelector('.price').textContent;
  box.classList.add('show');
}
function hideModal() {
  document.getElementById('lightbox').classList.remove('show');
}
