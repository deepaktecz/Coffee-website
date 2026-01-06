// Smooth scrolling for navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).
scrollIntoView({
behavior: 'smooth'});
});
});

// Product hover animations
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
card.addEventListener('mouseenter', function() {
this.style.transform = 'translateY(-15px)';
});
card.addEventListener('mouseleave', function() {
this.style.transform = 'translateY(0)';
});
});