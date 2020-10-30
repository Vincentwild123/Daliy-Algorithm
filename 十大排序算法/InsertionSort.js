function insertionSort(arr = []) {
  let preIndex;
  let current;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
let arr = [2, 1, 3, 5, 5, 1, 7, 8, 10];

console.log(insertionSort(arr));
