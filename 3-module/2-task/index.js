/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(` `).join(`,`).split(`,`).map(item => parseFloat(item)).filter(item => !isNaN(item));
  let sortedArr = arr.sort(function(a, b) { return a - b; });
  return  {
     min: sortedArr[0],
     max: sortedArr[sortedArr.length - 1],
  }
}
