document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    console.log('[CRT] Nav clicked. Hiding loader (if visible)...');
    if (loader) loader.style.display = 'none';

    console.log('[CRT] Showing CRT collapse and starting animation.');
    crtCollapse.style.display = 'block';
    crtCollapse.classList.add('collapse-anim');

    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);

      console.log('[CRT] CRT collapse animation ended. Hiding CRT, showing loader.');
      crtCollapse.style.display = 'none';
      if (loader) loader.style.display = 'flex';

      console.log('[CRT] Loader now visible. Waiting for loader duration...');
      setTimeout(() => {
        console.log('[CRT] Loader duration complete. Navigating to target page:', targetHref);
        window.location = targetHref;
      }, 3000); // Loader duration
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
