
(function () {
  const awards = tns({
    container: '.js-awards-slider',
    controls: false,
    gutter: 24,
    mouseDrag: true,
    prevButton: '.js-awards-control-prev-slider',
    nextButton: '.js-awards-control-next-slider',
    autoWidth: true,
    nav: true,
    navPosition: 'bottom',
    loop: false,
    responsive: {
      768: {
        gutter: 32,
      },
      1216: {
        autoWidth: false,
        controls: true,
        nav: false,
      }
    }
  });
})();
