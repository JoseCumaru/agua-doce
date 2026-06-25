const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = document.getElementById('menuIconOpen');
const menuIconClose = document.getElementById('menuIconClose');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
const header = document.querySelector('header');
const headerTrigger = document.querySelector('[data-header-trigger]') || document.getElementById('inicio') || document.querySelector('main > section');
let revealObserver = null;

function toggleMenu(forceClose = false) {
  if (!header || !menuButton || !mobileMenu || !menuIconOpen || !menuIconClose) return;

  const isOpen = !mobileMenu.classList.contains('hidden');
  const shouldOpen = forceClose ? false : !isOpen;

  mobileMenu.classList.toggle('hidden', !shouldOpen);
  menuIconOpen.classList.toggle('hidden', shouldOpen);
  menuIconClose.classList.toggle('hidden', !shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  header.classList.toggle('menu-open', shouldOpen);
}

if (menuButton) {
  menuButton.addEventListener('click', () => toggleMenu());
}

mobileLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(true)));

function setupRevealItems() {
  const revealItems = document.querySelectorAll('.reveal:not([data-reveal-ready])');

  if ('IntersectionObserver' in window) {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });
    }

    revealItems.forEach((item) => {
      item.setAttribute('data-reveal-ready', 'true');
      revealObserver.observe(item);
    });

    return;
  }

  revealItems.forEach((item) => {
    item.setAttribute('data-reveal-ready', 'true');
    item.classList.add('is-visible');
  });
}

setupRevealItems();
window.addEventListener('refresh-reveal', setupRevealItems);

function updateHeaderOnScroll() {
  if (!header || !headerTrigger) return;

  const triggerEnd = headerTrigger.offsetTop + headerTrigger.offsetHeight;
  header.classList.toggle('scrolled', window.scrollY > triggerEnd);
}

window.addEventListener('scroll', updateHeaderOnScroll);
window.addEventListener('resize', updateHeaderOnScroll);
updateHeaderOnScroll();
