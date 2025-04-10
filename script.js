// script.js

function openPopup(name, price, image) {
  document.getElementById('popupTitle').innerText = name;
  document.getElementById('popupPrice').innerText = price;
  document.getElementById('popupImage').src = image;
  document.getElementById('orderPopup').style.display = "flex";
}

function closePopup() {
  document.getElementById('orderPopup').style.display = "none";
}

function confirmOrder() {
  let quantity = document.getElementById('quantity').value;
  alert("Order placed successfully! Quantity: " + quantity);
  closePopup();
}

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.classList.add('hover-lift');
  });

  const ctaButtons = document.querySelectorAll('.confirm-btn');
  ctaButtons.forEach(btn => {
    btn.classList.add('btn-pulse');
  });
});
