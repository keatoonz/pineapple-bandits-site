document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const loader = document.getElementById('glitch-loader');
    const targetHref = btn.href;

    // 1. Show CRT collapse OVER all content (including loader)
    crtCollapse.style.display = 'block';
    crtCollapse.classList.add('collapse-anim');

    // 2. Wait for CRT collapse animation to finish
    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);

      // 3. Show loader, hide CRT collapse (so loader is now visible)
      crtCollapse.style.display = 'none';
      loader.style.display = 'flex';

      // 4. Wait for loader animation, then go to new page
      setTimeout(() => {
        window.location = targetHref;
      }, 3000); // 3s = your loader duration
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
