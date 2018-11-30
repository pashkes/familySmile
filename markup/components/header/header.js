(function () {
  const menuButton = document.querySelector('.js-show-menu');
  const menuWrapper = document.querySelector('.js-menu-wrapper');
  const close = menuWrapper.querySelector('.js-menu-close');
  menuButton.addEventListener('click', function (evt) {
    const target = evt.target.closest('.js-show-menu');
    console.log(target);
    target.setAttribute('aria-expanded', 'true');
    menuWrapper.classList.add('opened');
  });
  close.addEventListener('click', function () {
    menuWrapper.classList.remove('opened');
    menuButton.setAttribute('aria-expanded', 'false');
  });
})();

