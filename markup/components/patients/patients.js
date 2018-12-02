(function () {
  const patients = tns({
    container: '.js-slider-patients',
    controls: false,
    navPosition: 'bottom',
    gutter: 24,
    autoWidth: true,
    mouseDrag: true,
    prevButton: '.js-patients-control-prev-slide',
    nextButton: '.js-patients-control-next-slide',
    responsive: {
      768: {
        gutter: 32,
      },
      1216: {
        controls: true,
        nav: false
      }
    }
  });
})();
