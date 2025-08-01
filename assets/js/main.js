document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('glitch-loader');
  const logo = document.getElementById('loader-logo');
  const altLogos = [
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];
  // Prevent scroll while loader is showing
  document.body.classList.add('no-scroll');

  if (loader && logo) {
    let index = 0;
    const interval = setInterval(() => {
      logo.src = altLogos[index % altLogos.length];
      index++;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      loader.style.display = 'none';
      // Allow scrolling after loader is gone
      document.body.classList.remove('no-scroll');
    }, 3000);
  }
});
