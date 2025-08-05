document.addEventListener('DOMContentLoaded', function() {
  const altLogos = [
    'assets/logos/main-logo.png',
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];
  const logo = document.getElementById('loader-logo');
  const loader = document.getElementById('glitch-loader');
  const noiseLoader = document.getElementById('crt-noise-loader');
  const pinkNoise = document.getElementById('crt-noise-overlay');
  const main = document.querySelector('.container');

  let flickerInterval;

  function runLoader() {
    if (loader) loader.style.display = '';
    if (noiseLoader) noiseLoader.style.display = '';
    if (pinkNoise) pinkNoise.style.display = 'none';

    document.body.classList.add('noscroll');
    document.documentElement.classList.add('noscroll');

    if (logo) {
      logo.src = altLogos[0];
      let index = 1;
      flickerInterval = setInterval(() => {
        logo.src = altLogos[index % altLogos.length];
        index++;
      }, 400);
    }

    setTimeout(() => {
      clearInterval(flickerInterval);
      if (loader) loader.style.display = 'none';
      if (noiseLoader) noiseLoader.style.display = 'none';
      if (pinkNoise) pinkNoise.style.display = 'block';

      document.body.classList.remove('noscroll');
      document.documentElement.classList.remove('noscroll');
      if (main) main.style.display = '';
    }, 3000);
  }

  runLoader();

  // Handle bfcache restore
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      runLoader();
    }
  });
});
