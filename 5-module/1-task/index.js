function hideSelf() {
  document.addEventListener('click', function (event) {
    if (event.target == null) return;
    if (event.target.classList.contains('hide-self-button')) event.target.hidden = true;
  });
}