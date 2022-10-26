const mergeSort = (arrayToSort) => {
    /* If the array is either empty or has a length of 1 we just
    return the array since it is already sorted */
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  /* If not we find the middle value followed by splitting the array in
  two */
  const middle = Math.floor(arrayToSort.length / 2);
  const left = arrayToSort.slice(0, middle);
  const right = arrayToSort.splice(middle);

  /* We then create a recursive call stack which will continually split the array
  until we're left with multiple arrays of single values. */
  return mergeTwo(mergeSort(left), mergeSort(right));
};

const mergeTwo = (left, right) => {
  const sorted = [];

  /* While both arrays have values compare left with right move the lowest
   value into the sorted array (while removing it from the left/right array) */
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  /* The above logic will leave either the left or right array with remaining 
  values so concatenate these together with the sorted result (this will then be part of
    the recursive call that remains on the stack) */
  return [...sorted, ...left, ...right];
};

console.log(mergeSort([])); /* [] */
console.log(mergeSort([1])); /* [ 1 ] */
console.log(mergeSort([23, 5, 6, 90, 110])); /* [ 5, 6, 23, 90, 110 ] */
console.log(mergeSort([1, 5, 6, 23, 3, 40])); /* [ 1, 3, 5, 6, 23, 40 ] */
