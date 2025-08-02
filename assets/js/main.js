document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('glitch-loader');
  const logo = document.getElementById('loader-logo');
  const noiseLoader = document.getElementById('crt-noise-loader');
  const pinkNoise = document.getElementById('crt-noise-overlay');
  const altLogos = [
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];

  // Prevent scrolling and force scroll to top during loader
  document.documentElement.classList.add('noscroll');
  document.body.classList.add('noscroll');
  window.scrollTo(0, 0);

  // Flicker loader logo
  let index = 0;
  let interval = null;
  if (logo) {
    interval = setInterval(() => {
      logo.src = altLogos[index % altLogos.length];
      index++;
    }, 600);
  }

  // End loader after 3s
  setTimeout(() => {
    if (interval) clearInterval(interval);

    // Hide loader & green noise
    if (loader) loader.style.display = 'none';
    if (noiseLoader) noiseLoader.style.display = 'none';

    // Show pink overlay
    if (pinkNoise) pinkNoise.style.display = 'block';

    // Re-enable scrolling
    document.documentElement.classList.remove('noscroll');
    document.body.classList.remove('noscroll');
  }, 3000);
});
