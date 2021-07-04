/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let number = n;
  let result = 1;
  for(let i = 0; i < number; i++) {
  result = result * (number - i);
  }
  return result;
}
