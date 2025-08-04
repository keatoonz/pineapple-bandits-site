document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    if (loader) loader.style.display = 'none'; // Always hide loader first!

    crtCollapse.style.display = 'block';
    crtCollapse.classList.add('collapse-anim');

    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);
      crtCollapse.style.display = 'none';
      window.location = targetHref; // Navigate after CRT collapse
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
