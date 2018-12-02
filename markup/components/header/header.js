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


  const requestBtn = document.querySelector('.js-modal-request');
  requestBtn.addEventListener('click', () => {
    const form = document.querySelector('.request-modal .js-request-form');

    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      // if form success
      const close = document.querySelector('.js-modal-close');
      close.click();
      const success = document.querySelector('.js-request-success');
      success.click();
    })
  })

})();
