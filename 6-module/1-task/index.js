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
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add(`pure-table`);
    this.el.insertAdjacentHTML(`beforeend`, `            <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
            <td></td>
        </tr>
    </thead>
    <tbody>
    </tbody>`);
    this.data = data;
    let rows = data.map(item => `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.salary}</td>
                <td>${item.city}</td>
                <td><a data-remove-id=${item.id} href="#delete">X</a></td>
            </tr>` ).join('\n');
    this.el.lastChild.insertAdjacentHTML(`beforeend`, rows);

    this.el.addEventListener(`click`, (event) => {
      let target = event.target;
      if (target.tagName !== `A`) return;
      target.parentElement.parentElement.remove();
      this.onRemoved(target.dataset.removeId);
    })
  }


  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
