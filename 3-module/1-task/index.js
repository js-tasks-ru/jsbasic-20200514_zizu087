/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const filteredArray = data.filter(item => item.age <= age);
  const filteredArrayToString =  filteredArray.map(item => `${item.name} ${item.balance}`).join(`\n`);
  return filteredArrayToString.slice(0, filteredArrayToString.length - 1);
}
