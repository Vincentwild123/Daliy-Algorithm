function straightSelectSort(arr = []) {
  let minIndex;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let arr = [2, 1, 4, 5, 1, 3, 3, 5, 6, 8];

console.log(straightSelectSort(arr));
