document.addEventListener('DOMContentLoaded', () => {
  // Glitch loader logic
  const loader = document.getElementById('glitch-loader');
  const logo = document.getElementById('loader-logo');
  const altLogos = [
    'assets/logos/alt1.png',
    'assets/logos/alt2.png',
    'assets/logos/alt3.png',
    'assets/logos/alt4.png'
  ];

  if (loader && logo) {
    let index = 0;
    const interval = setInterval(() => {
      logo.src = altLogos[index % altLogos.length];
      index++;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      loader.style.display = 'none';
    }, 3000); // Loader disappears after 3 seconds
  }

  // Additional future JS can go here
});
