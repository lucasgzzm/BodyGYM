// Menú hamburger toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  // create overlay element (reused)
  let overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  const openMenu = () => {
    menuToggle.classList.add('active');
    navMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  menuToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) closeMenu(); else openMenu();
  });

  // Cerrar menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Cerrar menú al hacer clic fuera (overlay)
  overlay.addEventListener('click', () => {
    closeMenu();
  });

  // Cerrar menú al cambiar tamaño de pantalla
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Cerrar con tecla Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
