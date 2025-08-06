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
  const main = document.querySelector('main.container');

  let flickerInterval;

  function runLoader() {
    console.log('Running loader...');
    
    // Ensure loader elements are visible
    if (loader) {
      loader.style.display = 'flex';
      loader.style.visibility = 'visible';
      console.log('Loader displayed');
    }
    if (noiseLoader) {
      noiseLoader.style.display = 'block';
      noiseLoader.style.visibility = 'visible';
      console.log('Noise loader displayed');
    }
    if (pinkNoise) {
      pinkNoise.style.display = 'none';
      console.log('Pink noise hidden');
    }

    // Ensure body scrolling is disabled
    document.body.classList.add('noscroll');
    document.documentElement.classList.add('noscroll');

    // Start logo flicker animation
    if (logo) {
      logo.style.display = 'block';
      logo.style.visibility = 'visible';
      logo.src = altLogos[0];
      let index = 1;
      flickerInterval = setInterval(() => {
        logo.src = altLogos[index % altLogos.length];
        index++;
      }, 400);
      console.log('Logo flicker started');
    } else {
      console.error('Logo element not found!');
    }

    setTimeout(() => {
      console.log('Loader timeout reached, showing main content');
      clearInterval(flickerInterval);
      if (loader) {
        loader.style.display = 'none';
        console.log('Loader hidden');
      }
      if (noiseLoader) {
        noiseLoader.style.display = 'none';
        console.log('Noise loader hidden');
      }
      if (pinkNoise) {
        pinkNoise.style.display = 'block';
        console.log('Pink noise shown');
      }

      document.body.classList.remove('noscroll');
      document.documentElement.classList.remove('noscroll');
      if (main) {
        main.style.display = 'block';
        console.log('Main content displayed');
      } else {
        console.error('Main content element not found!');
      }
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
