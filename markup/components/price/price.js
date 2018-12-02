tabby.init();

(function () {
  const select = document.querySelector('.js-select-services');
  select.addEventListener('change', function (evt) {
    document.querySelectorAll('.js-tabs-price .tabs__link')[evt.target.selectedIndex].click();
  });
})();
