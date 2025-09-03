// Bind CRT collapse to both main menu buttons on index and bio page nav
document.querySelectorAll('.ps1-nav .menu-btn, .bio-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const targetHref = this.href;
    const targetUrl = new URL(targetHref, window.location.href);
    const isExternal = this.target === '_blank' || targetUrl.origin !== window.location.origin;

    // Allow external links or _blank to behave normally
    if (isExternal) return;

    // Don't reload same page
    if (window.location.href.split('#')[0] === targetHref) return;

    // We'll handle the transition/navigation
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const pinkNoise = document.getElementById('crt-noise-overlay');
    const noiseLoader = document.getElementById('crt-noise-loader');
    const mainContent = document.querySelector('main.container');

    // Hide main content (logo and nav) immediately
    if (mainContent) mainContent.style.display = 'none';
    // Prevent scroll during transition
    document.body.classList.add('noscroll');
    document.documentElement.classList.add('noscroll');

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
