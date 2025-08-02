document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('glitch-loader');
  const logo = document.getElementById('loader-logo');
  const altLogos = [
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];

  // Prevent scrolling and force scroll to top
  document.documentElement.classList.add('noscroll');
  document.body.classList.add('noscroll');
  window.scrollTo(0, 0);

  if (loader && logo) {
    let index = 0;
    const interval = setInterval(() => {
      logo.src = altLogos[index % altLogos.length];
      index++;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      loader.style.display = 'none';
      // Re-enable scrolling
      document.documentElement.classList.remove('noscroll');
      document.body.classList.remove('noscroll');
    }, 3000);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('glitch-loader');
  const noiseLoader = document.getElementById('crt-noise-loader');
  const pinkNoise = document.getElementById('crt-noise-overlay');
  document.body.classList.add('no-scroll');
  window.scrollTo(0, 0);

  setTimeout(() => {
    loader.style.display = 'none';
    document.body.classList.remove('no-scroll');
    // Hide green noise, show pink noise
    if (noiseLoader) noiseLoader.style.display = 'none';
    if (pinkNoise) pinkNoise.style.display = 'block';
  }, 3000);
});
