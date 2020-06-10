/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {

    if (!table.rows[i].cells[3].dataset.available) {
     table.rows[i].cells[3].setAttribute(`hidden`, ``);
    }

    if (table.rows[i].cells[3].dataset.available === `true`) {
     table.rows[i].cells[3].classList.add(`available`);
    } else {
     table.rows[i].cells[3].classList.add(`unavailable`);
    };

    if (table.rows[i].cells[2].innerHTML === `m`) {
     table.rows[i].cells[2].classList.add(`male`);
    }

    if (table.rows[i].cells[2].innerHTML === `f`) {
     table.rows[i].cells[2].classList.add(`female`);
    }

    if (table.rows[i].cells[1].innerHTML < 18) {
     table.rows[i].cells[1].style.textDecoration = `line-through`;
    }
  }
}









*/
