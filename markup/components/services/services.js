(function () {
  const showMore = Array.from(document.querySelectorAll('.js-expandmore'));
  const expandBlock = document.querySelectorAll('.js-expand-more ');
  showMore.forEach((element, index) => {
    element.addEventListener('click', function (evt) {
      evt.target.closest('.js-expandmore').style.display = 'none';
      expandBlock[index].classList.add('active');
      const hasOtherExpandBlock = evt.target.closest('.js-expandmore').previousSibling.parentElement.querySelector('.js-to_expand ');
      if (hasOtherExpandBlock) {
        hasOtherExpandBlock.style.display = 'inline';
      }
    });
  });
})();
