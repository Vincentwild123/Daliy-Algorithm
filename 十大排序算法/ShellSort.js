function shellSort(arr = []) {
  let len = arr.length;
  let gap;
  for (gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; ++i) {
      let current = arr[i];
      let j = i;
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
let arr = [2, 1, 3, 5, 5, 1, 7, 8, 10];

console.log(shellSort(arr));