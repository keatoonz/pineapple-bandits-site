document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const pinkNoise = document.getElementById('crt-noise-overlay');
    const noiseLoader = document.getElementById('crt-noise-loader');
    const targetHref = this.href;

    // Don't reload same page
    if (window.location.href.split('#')[0] === targetHref) return;

    // Hide pink, show green loader
    if (pinkNoise) pinkNoise.style.display = 'none';
    if (loader) loader.style.display = '';
    if (noiseLoader) noiseLoader.style.display = '';

    // Begin CRT collapse animation
    crtCollapse.style.display = 'block';
    crtCollapse.classList.remove('collapse-anim'); // reset in case
    void crtCollapse.offsetWidth; // force reflow
    crtCollapse.classList.add('collapse-anim');

    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);
      crtCollapse.style.display = 'none';
      window.location = targetHref;
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
