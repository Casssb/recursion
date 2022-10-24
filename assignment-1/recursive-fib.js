const recursiveFib = (num) => {
  if (num <= 0) return 'Please enter a positive integer above 0';
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let result = recursiveFib(num -1);

  result.push(result[num - 2] + result[num - 3]);
  return result;
};

console.log(recursiveFib(8));
