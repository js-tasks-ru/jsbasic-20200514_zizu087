/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let target = `xxx` || `1xbet`;
  const strToLowerCase =   str.toLowerCase();
  return strToLowerCase.includes(target);
}
