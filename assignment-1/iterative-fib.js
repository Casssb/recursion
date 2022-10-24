const iterativeFib = (n) => {
  let results = [0, 1];
  if (n < 1) return 'Please enter a positive integer above 0';
  if (n === 1) return [0];
  if (n === 2) return results;
  for (let i = 2; i < n; i++) {
    results.push(results[results.length - 1] + results[results.length - 2]);
  }
  return results;
};

console.log(iterativeFib(0)); /* Please enter a positive integer above 0 */
console.log(iterativeFib(1)); /* [ 0 ] */
console.log(iterativeFib(2)); /* [ 0, 1 ] */
console.log(iterativeFib(6)); /* [ 0, 1, 1, 2, 3, 5 ]*/
