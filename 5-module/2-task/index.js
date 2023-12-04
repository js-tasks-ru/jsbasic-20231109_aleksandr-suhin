function toggleText() {
  // ваш код...
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('toggle-text-button')){
      // let elem = document.getElementById(id);
      //text.hidden = !text.hidden;
      if (text.hasAttribute('hidden')) text.removeAttribute('hidden');
      else text.setAttribute('hidden',true);
    }
  });
}
