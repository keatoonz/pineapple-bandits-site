// CRT Collapse and Loader Transition
document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Start CRT collapse
    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    // Show CRT collapse animation
    crtCollapse.classList.add('collapse-anim');

    // Listen for animation end (only once)
    function handleCollapseEnd() {
      // Show glitch loader (assumes your loader is hidden by default)
      if (loader) loader.style.display = 'flex';

      // Optionally hide CRT collapse animation
      crtCollapse.classList.remove('collapse-anim');

      // After loader, go to target page
      setTimeout(() => {
        window.location = targetHref;
      }, 1800); // Adjust to match your loader's duration

      crtCollapse.removeEventListener('animationend', handleCollapseEnd);
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
