document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    // Make sure loader is hidden
    if (loader) loader.style.display = 'none';

    // Start CRT collapse
    crtCollapse.classList.add('collapse-anim');

    // Listen for animation end
    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);

      // Show loader AFTER CRT collapse finishes
      if (loader) loader.style.display = 'flex';

      // Optionally hide CRT collapse animation
      crtCollapse.classList.remove('collapse-anim');

      // Proceed to new page after loader duration
      setTimeout(() => {
        window.location = targetHref;
      }, 1800); // match this to your loader's visible duration
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
