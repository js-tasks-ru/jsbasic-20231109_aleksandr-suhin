function toggleText() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-text-button')) {
      let text1 = event.target.nextElementSibling;
      if (text1 === text) text1.hidden = !text1.hidden;
    }
  });
}
