/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement('table');
    let thead = `<thead>
                    <tr>
                        <th>Имя</th>
                        <th>Возраст</th>
                        <th>Зарплата</th>
                        <th>Город</th>
                        <th></th>
                    </tr>
                </thead>`;
    table.innerHTML = thead;
    let tbody = document.createElement('tbody');
    for (const row of rows) {
      const tr = document.createElement('tr');
      for (const key in row) {
        let td = document.createElement('td');
        td.innerText = row[key];
        tr.appendChild(td);
      }
      const tdD = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = 'X';
      tdD.appendChild(button);
      tr.appendChild(tdD);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    table.addEventListener('click', function (evt) {
      if (evt.target.tagName === 'BUTTON') {
        evt.target.closest('tr').remove();
      }
    });    
    this.elem = table;
  }
}
