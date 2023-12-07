import createElement from '../../assets/lib/create-element.js';
import { initCarousel } from '../../5-module/3-task/index.js';

export default class Carousel {
  constructor(slides) {
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


    this.elem.addEventListener('click', function (evt) {
      if (evt.target.closest('.carousel__button')) {
        let id = evt.target.closest('.carousel__slide').dataset.id;
        let customEevent = new CustomEvent('product-add', {
          // имя события должно быть именно "product-add"
          detail: id, // Уникальный идентификатора товара из объекта слайда
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        evt.target.closest('.carousel').dispatchEvent(customEevent);
      }
    });

    initCarousel(slides.length);
    this.slides = slides;
  }
}
