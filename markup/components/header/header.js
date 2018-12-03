(function () {
// собираем все якоря; устанавливаем время анимации и количество кадров
  const anchors = [].slice.call(document.querySelectorAll('.anchor')),
    animationTime = 600,
    framesCount = 40;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });
})();
(function () {
  const menuButton = document.querySelector('.js-show-menu');
  const menuWrapper = document.querySelector('.js-menu-wrapper');
  const close = menuWrapper.querySelector('.js-menu-close');
  menuButton.addEventListener('click', function (evt) {
    const target = evt.target.closest('.js-show-menu');
    target.setAttribute('aria-expanded', 'true');
    menuWrapper.classList.add('opened');
  });
  close.addEventListener('click', function () {
    menuWrapper.classList.remove('opened');
    menuButton.setAttribute('aria-expanded', 'false');
  });
  const menuAnchor = Array.from(document.querySelectorAll('.anchor'));
  menuAnchor.forEach((element) => {
    element.addEventListener('click', function () {
      menuWrapper.classList.remove('opened');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  const requestBtn = document.querySelector('.js-modal-request');
  requestBtn.addEventListener('click', () => {
    const form = document.querySelector('.request-modal .js-request-form');

    if (!form) {
      return false;
    }
    form.addEventListener('submit', e => {
      e.preventDefault();

      // if form success
      let closeModal = document.querySelector('.js-modal-close');
      closeModal.click();
      const success = document.querySelector('.js-request-success');
      success.click();
    });
  });

})();
