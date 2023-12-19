import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  #steps;
  #value;
  constructor({ steps, value = 0 }) {
    this.#steps = steps;
    this.elem = this.#render(steps);
    this.#SetValue(value);
    this.elem.addEventListener('click', (evt) => {
      let left = evt.clientX - this.elem.getBoundingClientRect().left; //100px
      let leftRelative = left / this.elem.offsetWidth; //0..1
      let step = Math.round(leftRelative * (steps - 1)); // 0..4      
      this.#SetValue(step);
    });
  }
  #render(length) {
    let template = `
    <!--Корневой элемент слайдера-->
    <div class="slider">
    
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
    
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
    
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->
    `;

    for (let index = 0; index < length; index++) {
      template += `<span></span>`;

    }

    template += `
        </div>
    </div>
    `;
    return createElement(template);
  }

  #SetValue = (step) => {
    if (this.#value != step) {
      this.#value = step;
      let leftPercents = step / (this.#steps - 1) * 100; //0..100
      this.elem.querySelector('.slider__thumb').style.left = `${leftPercents}%`;
      this.elem.querySelector('.slider__progress').style.width = `${leftPercents}%`;
      this.elem.querySelector('.slider__value').innerHTML = step;

      //span
      var spans = this.elem.querySelector('.slider__steps').children;
      for (let index = 0; index <= spans.length; index++) {
        if (spans[index] === undefined) continue; //для прохождения тестов
        spans[index].className = index <= step ? 'slider__step-active' : '';
      }

      const customEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.#value, // значение 0, 1, 2, 3, 4
        bubbles: true, // событие всплывает - это понадобится в дальнейшем
      });
      this.elem.dispatchEvent(customEvent);
    }
  }
}
