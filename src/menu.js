(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyRef = document.querySelector('body');
  const anchorRef = document.querySelectorAll('.mobile-menu-link');
  const anchorIconRef = document.querySelector('.mobile-menu-icon-link');

  menuBtnRef.addEventListener('click', doit);
  anchorIconRef.addEventListener('click', doit);
  for (let i = 0; i < anchorRef.length; i++) {
    anchorRef[i].addEventListener('click', doit);
  }

  function doit() {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('overflow-hidden');
  }
})();
