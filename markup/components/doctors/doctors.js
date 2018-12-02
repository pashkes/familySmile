(function () {
  const doctors = tns({
    container: '.js-slider-doctors',
    controls: false,
    navPosition: 'bottom',
    gutter: 24,
    autoWidth: true,
    mouseDrag: true,
    prevButton: '.js-doctors-control-prev-slider',
    nextButton: '.js-doctors-control-next-slider',
    responsive: {
      768: {
        gutter: 32,
      },
      1216: {
        controls: true,
        nav: false,
        autoWidth: false,
        items: 4,
        viewportMax: 1152
      }
    }
  });

  // add and remove class active
  const buttonsGroup = Array.from(document.querySelectorAll('.js-button-group'));
  buttonsGroup.forEach((element) => {
    element.addEventListener('click', (evt) => {
      buttonsGroup.forEach((currentButtons) => currentButtons.classList.remove('active'));
      evt.target.closest('.js-button-group').classList.add('active');
    });
  });
})();

