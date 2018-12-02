(function () {
  const form = document.querySelector('#order');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // if form success
    const success = document.querySelector('.js-order-success');
    success.click();
  })
})();