function toggleText() {
  // ваш код...
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-text-button')) {
      if (text.hasAttribute('hidden')) text.removeAttribute('hidden');
      else text.setAttribute('hidden', true);
    }
  });
}
