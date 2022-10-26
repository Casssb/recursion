const iterativeFib = (num) => {
  let result = [0, 1];
  if (num < 1) return 'Please enter a positive integer above 0';
  if (num === 1) return [0];
  if (num === 2) return result;
  for (let i = 2; i < num; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
};

console.log(iterativeFib(0)); /* Please enter a positive integer above 0 */
console.log(iterativeFib(1)); /* [ 0 ] */
console.log(iterativeFib(2)); /* [ 0, 1 ] */
console.log(iterativeFib(6)); /* [ 0, 1, 1, 2, 3, 5 ]*/
