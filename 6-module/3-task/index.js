import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #currentNumber = 0;
  //elem;

  #OnButtonClick(evt) {
    let id = evt.target.closest('.carousel__slide').dataset.id;
    let customEvent = new CustomEvent('product-add', {
      // имя события должно быть именно "product-add"
      detail: id, // Уникальный идентификатора товара из объекта слайда
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(customEvent);
  }

  #OnArrowClick(evt){
    let arrowDiv = evt.target.closest('div');
    if (arrowDiv == null) return;
    let isLeft = arrowDiv.classList.contains('carousel__arrow_left');
    let isRight = arrowDiv.classList.contains('carousel__arrow_right');

    //если кликнули по стрелке
    if (isLeft || isRight) {
      //если стрелка влево:
      if (isLeft && this.#currentNumber > 0) this.#currentNumber--;

      //если стрелка вправо:
      if (isRight && this.#currentNumber < this.slides.length - 1) this.#currentNumber++;

      //для любой стрелки:
      let carInner = this.elem.querySelector('.carousel__inner');
      carInner.style.transform = `translateX(-${carInner.offsetWidth * this.#currentNumber}px)`;
      // document.querySelector('.carousel__inner').style.transform = `translateX(-${currentNumber}00%)`;
      //настроим видимость стрелок
      this.elem.querySelector('.carousel__arrow_left').style.display
        = (this.#currentNumber === 0) ? 'none' : '';

      this.elem.querySelector('.carousel__arrow_right').style.display
        = (this.#currentNumber === this.slides.length - 1) ? 'none' : '';
    }
  }

  constructor(slides) {
    this.slides = slides;
    let text = `
    <div class="carousel">
    <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left" style="display:none;">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">`;

    for (const slide of slides) {
      text += `<!--Верстка n-ого слайда-->
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`;
    }
    text += `
        </div> 
      </div>`;
    this.elem = createElement(text);

    this.elem.addEventListener('click', (evt) => {
      if (evt.target.closest('.carousel__button')) {
        this.#OnButtonClick(evt);
      }

      if (evt.target.closest('div').classList.contains('carousel__arrow_left')
        || evt.target.closest('div').classList.contains('carousel__arrow_right')) {
        this.#OnArrowClick(evt);
      }
    });
  }
}
