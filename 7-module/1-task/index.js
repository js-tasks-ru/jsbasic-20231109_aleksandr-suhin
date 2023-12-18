import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render(categories);

    //обработаем клики
    this.elem.addEventListener('click', (evt) => {
      //клики по стрелам
      if (evt.target.closest('.ribbon__arrow')) {
        this.#OnArrowClick(evt);
      }
      if (evt.target.classList.contains('ribbon__item')) {
        this.#OnLinkClick(evt);
      }
    });

    //реализуем скрытие стрелок
    this.elem.querySelector('.ribbon__inner').addEventListener('scroll', () => {
      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      let left = this.elem.querySelector('.ribbon__arrow_left');
      let right = this.elem.querySelector('.ribbon__arrow_right');

      if (ribbonInner.scrollLeft === 0) left.classList.remove('ribbon__arrow_visible');
      else left.classList.add('ribbon__arrow_visible');

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollRight < 1) right.classList.remove('ribbon__arrow_visible');
      else right.classList.add('ribbon__arrow_visible');
    });
  }

  #render(categories) {
    let template = `
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
      `;
    for (const category of categories) {
      template += `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
    }
    template +=
      `</nav>

      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `;
    return createElement(template);
  }

  #OnArrowClick(evt) {
    let arrowButton = evt.target.closest('button');
    //if (arrowbutton == null) return;
    let isLeft = arrowButton.classList.contains('ribbon__arrow_left');
    let isRight = arrowButton.classList.contains('ribbon__arrow_right');

    //если кликнули по стрелке
    if (isLeft || isRight) {
      let delta = 350;
      //если стрелка влево:
      if (isLeft) delta = -delta;

      //если стрелка вправо:
      //if (isRight) ...

      //для любой стрелки:
      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      ribbonInner.scrollBy(delta, 0);
    }
  }

  #OnLinkClick(evt) {
    //снимем выделение со всех элементов
    evt.target.parentElement.querySelectorAll('ribbon__item').forEach(element => {
      element.classList.remove('ribbon__item_active');      
    });
    //и выставим только для нашего
    evt.target.classList.add('ribbon__item_active');

    //сгенерируем событие
    let id = evt.target.dataset.id;
    const customEvent = new CustomEvent('ribbon-select', {
      detail: id,
      bubbles: true,
    })
    this.elem.dispatchEvent(customEvent);
  }


}
