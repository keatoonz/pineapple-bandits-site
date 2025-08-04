function runLoaderLogic() {
  const altLogos = [
    'assets/logos/main-logo.png',
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];
  const logo = document.getElementById('loader-logo');
  const loader = document.getElementById('glitch-loader');
  let interval = null;

  if(loader) loader.style.display = '';
  document.body.classList.add('noscroll');
  document.documentElement.classList.add('noscroll');

  if (logo) {
    logo.src = altLogos[0];
    let index = 1;
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      logo.src = altLogos[index % altLogos.length];
      index++;
    }, 400);

    setTimeout(() => {
      if (interval) clearInterval(interval);
      if(loader) loader.style.display = 'none';
      document.body.classList.remove('noscroll');
      document.documentElement.classList.remove('noscroll');
      const main = document.querySelector('.container');
      if(main) main.style.display = '';
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', runLoaderLogic);
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    runLoaderLogic();
  }
});

// Nav transition logic (NO loader here)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ps1-nav a.menu-btn').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var destination = this.href;
      // Prevent reloading the current page
      if (window.location.href.split('#')[0] === destination) {
        e.preventDefault();
        return;
      }
      // Let CRT collapse handle the animation and navigation.
      // No loader logic here anymore!
    });
  });
});
