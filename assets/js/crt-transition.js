// CRT Collapse and Loader Transition
document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Start CRT collapse
    const crtCollapse = document.getElementById('crt-collapse');
    crtCollapse.classList.add('collapse-anim');

    setTimeout(() => {
      // Show glitch loader (assumes your loader is hidden by default)
      document.getElementById('glitch-loader').style.display = 'flex';

      // Hide CRT collapse
      crtCollapse.classList.remove('collapse-anim');

      // After loader, go to target page
      setTimeout(() => {
        window.location = btn.href;
      }, 1800); // Adjust to match your loader's duration
    }, 800); // CRT collapse duration
  });
});
