const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = document.getElementById('menuIconOpen');
const menuIconClose = document.getElementById('menuIconClose');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMenu(forceClose = false) {
  const isOpen = !mobileMenu.classList.contains('hidden');
  const shouldOpen = forceClose ? false : !isOpen;

  mobileMenu.classList.toggle('hidden', !shouldOpen);
  menuIconOpen.classList.toggle('hidden', shouldOpen);
  menuIconClose.classList.toggle('hidden', !shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
}

menuButton.addEventListener('click', () => toggleMenu());
mobileLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(true)));
