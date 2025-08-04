document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    // 1. Hide loader in case page was just loaded
    if (loader) loader.style.display = 'none';

    // 2. Bring CRT collapse to front and start animation
    crtCollapse.style.display = 'block';
    crtCollapse.classList.add('collapse-anim');

    // 3. After CRT collapse animation ends...
    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);

      // 4. Hide CRT collapse, show loader
      crtCollapse.style.display = 'none';
      if (loader) loader.style.display = 'flex';

      // 5. Wait for loader animation, then navigate
      setTimeout(() => {
        window.location = targetHref;
      }, 3000); // duration matches loader time
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
