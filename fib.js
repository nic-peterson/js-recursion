function fibs(num) {
  arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibsRec(num) {
  if (num <= 1) return 1;
  return fibs(num - 1) + fibs(num - 2);
}

console.log(fibs(8));
// console.log(fibsRec(8));
