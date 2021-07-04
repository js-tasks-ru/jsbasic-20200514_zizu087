/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.insertAdjacentHTML(`beforeend`, `
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>
    </thead>
    <tbody>
    </tbody>`);
    let rows = items.map(item => `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.salary}</td>
                <td>${item.city}</td>
            </tr>` ).join('\n');
    let tBody = this.el.querySelector(`tbody`);
    tBody.insertAdjacentHTML(`beforeend`, rows);

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    tBody.innerHTML = ``;
    let sortBy = this.el.rows[0].cells[column].innerHTML.toLowerCase();
    let sorted = items
    .sort( (a, b) => {
      if(a[sortBy] < b[sortBy]) { return -1; }
      if(a[sortBy] > b[sortBy]) { return 1; }
      return 0;
    })
    .map(item => `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.salary}</td>
                <td>${item.city}</td>
            </tr>` );

    let sortedResult;
    let isOpposite = desc;
    if (isOpposite) {
      let sortedOpposite = sorted.reverse();
      sortedResult = sortedOpposite;
    } else {
      sortedResult = sorted;
       }
    tBody.insertAdjacentHTML(`beforeend`, sortedResult.join(`\n`));
  };
}
