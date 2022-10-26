const recursiveFib = (num) => {
  /* Create base case and remove outliers */
  if (num <= 0) return 'Please enter a positive integer above 0';
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  /* This is the recursive element. It will effectively stack the sequence until it reaches 
  2. At that point it will return the array above ( [0, 1]) which can then be used to complete
  the missing logic for all the other cases on the stack. */
  let result = recursiveFib(num - 1);

  result.push(result[num - 2] + result[num - 3]);
  return result;
};

console.log(recursiveFib(8)); /* [0, 1, 1,  2, 3, 5, 8, 13] */
console.log(recursiveFib(0)); /* Please enter a positive integer above 0 */
console.log(recursiveFib(1)); /* [ 0 ] */
