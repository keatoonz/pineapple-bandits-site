// crt-transition.js
document.querySelectorAll('.ps1-nav .menu-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const crtCollapse = document.getElementById('crt-collapse');
    if (!crtCollapse) return;

    crtCollapse.classList.add('collapse-anim');

    setTimeout(() => {
      // Show the glitch loader (assuming you have a function or simply show the loader div)
      document.getElementById('glitch-loader').style.display = 'flex';

      // After your glitch loader animation is done, redirect:
      setTimeout(() => {
        window.location = btn.href;
      }, 1800); // Adjust this to match your loader's animation length
    }, 800); // CRT collapse duration
  });
});
