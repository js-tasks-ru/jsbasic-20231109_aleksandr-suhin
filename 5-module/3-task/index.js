function initCarousel(countElem = 4) {
  // ваш код...
  let currentNumber = 0;
  //const countElem = 4;  
  let left = document.querySelector('.carousel__arrow_left');
  if (left != null) left.style.display = 'none';
  document.addEventListener('click', function (event) {
    let arrowDiv = event.target.closest('div');
    if (arrowDiv == null) return;
    let isLeft = arrowDiv.classList.contains('carousel__arrow_left');
    let isRight = arrowDiv.classList.contains('carousel__arrow_right');

    //если кликнули по стрелке
    if (isLeft || isRight) {
      //если стрелка влево:
      if (isLeft && currentNumber > 0) currentNumber--;

      //если стрелка вправо:
      if (isRight && currentNumber < countElem - 1) currentNumber++;

      //для любой стрелки:
      let carInner = document.querySelector('.carousel__inner');
      carInner.style.transform = `translateX(-${carInner.offsetWidth * currentNumber}px)`;
      // document.querySelector('.carousel__inner').style.transform = `translateX(-${currentNumber}00%)`;
      CheckArrowsVisible();
    }
  });

  function CheckArrowsVisible() {
    document.querySelector('.carousel__arrow_left').style.display
      = (currentNumber === 0) ? 'none' : '';

    document.querySelector('.carousel__arrow_right').style.display
      = (currentNumber === countElem - 1) ? 'none' : '';
  }
}

