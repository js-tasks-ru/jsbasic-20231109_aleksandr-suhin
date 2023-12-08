function toggleText() {
  document.addEventListener('click', function (event) {
    if (event.target != null && event.target.classList.contains('toggle-text-button')) {
      event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden;
    }
  });
}
