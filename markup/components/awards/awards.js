
(function () {
  const patients = tns({
    center: true,
    container: '.js-awards-slider',
    controls: false,
    items: 1,
    // gutter: 24,
    mouseDrag: true,
    nav: false,
    responsive: {
      480: {
        gutter: 32,
        items: 2
      },
      768: {
        items: 3
      },
      1216: {
        items: 4
      },
      1400: {
        items: 5
      }
    }
  });
})();
