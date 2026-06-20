const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = document.getElementById('menuIconOpen');
const menuIconClose = document.getElementById('menuIconClose');
const mobileLinks = mobileMenu.querySelectorAll('a');
const revealItems = document.querySelectorAll('.reveal');
const header = document.querySelector('header');

function toggleMenu(forceClose = false) {
  const isOpen = !mobileMenu.classList.contains('hidden');
  const shouldOpen = forceClose ? false : !isOpen;

  mobileMenu.classList.toggle('hidden', !shouldOpen);
  menuIconOpen.classList.toggle('hidden', shouldOpen);
  menuIconClose.classList.toggle('hidden', !shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  header.classList.toggle('menu-open', shouldOpen);
}

menuButton.addEventListener('click', () => toggleMenu());
mobileLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(true)));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Header color change on scroll
function updateHeaderOnScroll() {
  if (!header || !heroSection) return;
  if (window.scrollY > heroSection.offsetHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

const heroSection = document.getElementById('inicio');
window.addEventListener('scroll', updateHeaderOnScroll);
updateHeaderOnScroll();
