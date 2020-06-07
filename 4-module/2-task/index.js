/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; table.rows.length; i++ ) {
    table.rows[i].cells[i].style.background = `red`;
  }
}
