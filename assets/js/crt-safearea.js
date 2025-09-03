(function(){
  function updateInsets() {
    const borderImg = document.querySelector('.crt-border');
    if (!borderImg) return;
    // Heuristic: assume a uniform frame thickness based on visible rounded border in the asset
    // We’ll use a percentage of the shorter side to estimate insets and convert to CSS px via viewport
    const framePercent = 0.044; // ~4.4% each side as a starting point
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const insetTop = Math.round(vh * framePercent);
    const insetBottom = Math.round(vh * framePercent);
    const insetLeft = Math.round(vw * framePercent);
    const insetRight = Math.round(vw * framePercent);
    const root = document.documentElement;
    root.style.setProperty('--crt-inset-top', insetTop + 'px');
    root.style.setProperty('--crt-inset-bottom', insetBottom + 'px');
    root.style.setProperty('--crt-inset-left', insetLeft + 'px');
    root.style.setProperty('--crt-inset-right', insetRight + 'px');
  }

  function init(){
    updateInsets();
    window.addEventListener('resize', updateInsets);
    window.addEventListener('orientationchange', updateInsets);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
