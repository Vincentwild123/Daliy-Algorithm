function MergeSort(arr = []) {
  if (arr.length < 2) return arr;
  return divide(arr);
}
function divide(arr) {
  let left;
  let right;
  if (arr.length === 1) return arr;
  else {
    left = divide(arr.slice(0, Math.floor(arr.length / 2)));
    right = divide(arr.slice(Math.floor(arr.length / 2)));
  }
  return Merge(left, right);
}

function Merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length && rightArr.length) {
    result.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
  }
  return result.concat(leftArr.length ? leftArr : rightArr);
}

let arr = [3, 1, 1, 5, 6, 8, 1];
console.log(MergeSort(arr));
