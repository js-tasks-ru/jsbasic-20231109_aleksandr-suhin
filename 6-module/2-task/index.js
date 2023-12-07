import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this._container = createElement(
      `<div class="card">
          <div class="card__top">
              <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
              <span class="card__price">€${product.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
              <div class="card__title">${product.name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
          </div>
      </div>`);

    let customEevent = new CustomEvent('product-add', {
      // имя события должно быть именно "product-add"
      detail: product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });

    this._container.addEventListener('click', function (evt) {
      if (evt.target.closest('.card__button')) {
        evt.target.closest('.card').dispatchEvent(customEevent);
      }
    });
  }
  get elem() {
    return this._container;
  }
}