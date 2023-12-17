function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Divide the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Conquer: recusrively sort the two halves
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  // Combine: merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }

  return sorted.concat(left, right);
}

const unsorted_array = [5, 3, 1, 4, 6, 2];
console.log(mergeSort(unsorted_array));
