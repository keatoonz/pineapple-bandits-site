(function(){
  function setupToggle(btn, nav) {
    if (!btn || !nav) return;
    // Ensure collapsible class
    nav.classList.add('is-collapsible');
    // Start closed on mobile
    nav.classList.remove('open');

    btn.addEventListener('click', function(){
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('menu-open', isOpen);
    });
  }

  function init(){
    // Page may have ps1-nav (side) or bio-nav (bio page)
    const mobileButtons = document.querySelectorAll('.mobile-nav-toggle');
    mobileButtons.forEach(btn => {
      // aria-controls points to the nav id; fallback: closest nav
      const id = btn.getAttribute('aria-controls');
      let nav = id ? document.getElementById(id) : null;
      if (!nav) nav = btn.nextElementSibling && btn.nextElementSibling.matches('nav') ? btn.nextElementSibling : btn.closest('.side-nav, .bio-nav')?.querySelector('nav');
      setupToggle(btn, nav);
    });

    // Auto-close when a link is clicked (mobile only)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.ps1-nav .menu-btn, .bio-nav .menu-btn');
      if (!link) return;
      const nav = link.closest('.ps1-nav.is-collapsible, .bio-nav.is-collapsible');
      const btn = nav ? nav.parentElement.querySelector('.mobile-nav-toggle') : null;
      if (window.matchMedia('(max-width: 900px)').matches) {
        if (nav && btn) {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
