/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  return str.length === 0 ? `` : str.replace(str[0], str[0].toUpperCase());
}
