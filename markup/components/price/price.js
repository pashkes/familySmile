tabby.init();

(function () {
  const select = document.querySelector('.js-select-services');
  if (!select) return;
  select.addEventListener('change', function (evt) {
    document.querySelectorAll('.js-tabs-price .tabs__link')[evt.target.selectedIndex].click();
  });

  var selectPrice = new CustomSelect({
    elem: 'select-price'
  });
})();
