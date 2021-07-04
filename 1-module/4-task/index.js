/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const strToLowerCase =   str.toLowerCase();
  return strToLowerCase.includes(`xxx`) || strToLowerCase.includes(`1xbet`);
}
