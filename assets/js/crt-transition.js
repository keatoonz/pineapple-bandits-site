document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    const targetHref = btn.href;

    // Only play CRT collapse animation on departure
    crtCollapse.style.display = 'block';
    crtCollapse.classList.add('collapse-anim');

    function handleCollapseEnd() {
      crtCollapse.removeEventListener('animationend', handleCollapseEnd);
      crtCollapse.style.display = 'none';
      // DIRECTLY navigate after CRT collapse; DO NOT show loader here!
      window.location = targetHref;
    }

    crtCollapse.addEventListener('animationend', handleCollapseEnd);
  });
});
