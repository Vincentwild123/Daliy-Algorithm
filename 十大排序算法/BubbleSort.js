
function bubbleSort(arr = []) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [1, 2, 1, 4, 3, 5, 3, 6, 9, 75, 8];

console.log(bubbleSort(arr));
