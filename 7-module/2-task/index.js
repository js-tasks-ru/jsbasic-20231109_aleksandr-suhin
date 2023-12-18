import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #elem
  constructor() {
    this.#elem = this.#render();
    this.#elem.querySelector('.modal__close').addEventListener('click', () => {
      this.#closeSelf();
    });
    document.body.addEventListener('keydown', this.#OnEscapeDown);
  }

  open() {
    if (!document.body.classList.contains('is-modal-open')) {
      document.body.classList.add('is-modal-open');
      document.body.appendChild(this.#elem);
    }
  }

  setTitle(title) {
    this.#elem.querySelector('.modal__title').innerHTML = title;
  }

  setBody(node) {
    if (this.#elem === null) return;
    //this.#elem.querySelector('.modal__body') = modalBody.replaceWith(node); - этот не проходит тесты
    this.#elem.querySelector('.modal__body').innerHTML='';
    this.#elem.querySelector('.modal__body').append(node);
  }

  #closeSelf() {
    if (document.body.classList.contains('is-modal-open')) {
      document.body.classList.remove('is-modal-open');
      document.body.removeChild(this.#elem);
      document.body.removeEventListener('keydown', this.#OnEscapeDown);
    }
  }

  close() {
    this.#closeSelf();
  }

  #OnEscapeDown = (event) => {
    if (event.code == 'Escape') this.#closeSelf();
  }

  #render() {
    let template = `
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>    
    </div>
    `;
    return createElement(template);
  }
}
