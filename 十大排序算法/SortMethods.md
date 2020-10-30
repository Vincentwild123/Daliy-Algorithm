# 十大排序算法

### 1.冒泡排序

**遍历数组 length-1 次,每次都将最大的数放在数组末尾**

```js
- 平均时间复杂度:O(n^2)
- 最坏时间复杂度:O(n^2)
- 最好时间复杂度:O(n)
- 空间复杂度:O(1)
- 稳定
function bubbleSort(arr = []) {
  let temp;
  let ifInOrder = true;
  //优化项,如果数组本来有序,在第一次遍历的时候不会发生交换,直接返回
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        ifInOrder = false;
      }
    }
    if(ifInOrder) return arr;
  }
  return arr;
}
```

### 2.直接选择排序

**经过 n-1 躺遍历,每次都把最小的数放在最前面**

```js
- 平均时间复杂度:O(n^2)
- 最坏时间复杂度:O(n^2)
- 最好时间复杂度:O(n^2)
- 空间复杂度:O(1)
- 不稳定
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
```

### 3.插入排序

**在数组前段构建有序数列,将未排序段第一个元素从有序段后向前扫描,插入到指定位置**

```js
- 平均时间复杂度:O(n^2)
- 最坏时间复杂度:O(n^2)
- 最好时间复杂度:O(n)
- 空间复杂度:O(1)
- 稳定
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
```

### 4.希尔排序

**分组进行插入排序,最后再将间隔变为 1 做插入排序**

```js
- 平均时间复杂度:O(n^1.3)
- 最坏时间复杂度:O(n^2)
- 最好时间复杂度:O(n)
- 空间复杂度:O(1)
- 不稳定
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
```

### 5.归并排序

**将整个数组分成一个个元素,将相邻元素两两归并**

```js
- 平均时间复杂度:O(nlog(n))
- 最坏时间复杂度:O(nlog(n))
- 最好时间复杂度:O(nlog(n))
- 空间复杂度:O(n)
- 稳定
function MergeSort(arr = []) {
  if (arr.length < 2) return arr;
  return divide(arr);
}
//归类
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
//合并
function Merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length && rightArr.length) {
    result.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
  }
  return result.concat(leftArr.length ? leftArr : rightArr);
}
```

### 6.快速排序

**选定一个基准值,将小于基准值和大于基准值的分别放在两边**

```js
- 平均时间复杂度:O(nlog(n))
- 最坏时间复杂度:O(nlog(n^2))
- 最好时间复杂度:O(nlog(n))
- 空间复杂度:O(nlog(n))
- 不稳定
function quickSort(arr, begin = 0, end = arr.length - 1) {
  //递归出口
  if (begin >= end) return;
  var l = begin; // 左指针
  var r = end; //右指针
  var temp = arr[begin]; //基准数，这里取数组第一个数
  //左右指针相遇的时候退出扫描循环
  while (l < r) {
    //右指针从右向左扫描，碰到第一个小于基准数的时候停住
    while (l < r && arr[r] >= temp) r--;
    //左指针从左向右扫描，碰到第一个大于基准数的时候停住
    while (l < r && arr[l] <= temp) l++;
    //交换左右指针所停位置的数
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  //最后交换基准数与指针相遇位置的数
  [arr[begin], arr[l]] = [arr[l], arr[begin]];
  //递归处理左右数组
  quickSort(arr, begin, l - 1);
  quickSort(arr, l + 1, end);
  return arr;
}
```

### 7.堆排序

**构建大顶堆/小顶堆,将根元素沉到数组的最后一位,再调整堆,直到排序完全**

```js
- 平均时间复杂度:O(nlog(n))
- 最坏时间复杂度:O(nlog(n))
- 最好时间复杂度:O(nlog(n))
- 空间复杂度:O(1)
- 不稳定
var len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) {
  // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}
function heapify(arr, i) {
  // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function heapSort(arr) {
  buildMaxHeap(arr);
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}

let arr = [3, 1, 5, 16, 8, 1, 12, 1];
console.log(heapSort(arr));
```

### 8.计数排序

**必须是有确定范围的整数数组,将每个元素的出现次数存进数组,按值的大小输出索引**

```js
- 平均时间复杂度:O(nlog(n+k))
- 最坏时间复杂度:O(nlog(n+k))
- 最好时间复杂度:O(nlog(n+k))
- 空间复杂度:O(n+k)
- 稳定
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  (arrLen = arr.length), (bucketLen = maxValue + 1);
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }
  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;

      bucket[j]--;
    }
  }
  return arr;
}

```

### 9.桶排序

**用映射函数将元素放在不同的桶,桶内排序,再合并**

```js
- 平均时间复杂度:O(nlog(n+k))
- 最坏时间复杂度:O(nlog(n^2))
- 最好时间复杂度:O(nlog(n))
- 空间复杂度:O(n+k)
- 稳定
function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }
  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]; // 输入数据的最大值
    }
  }
  // 桶的初始化
  var DEFAULT_BUCKET_SIZE = 5; // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }
  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }
  return arr;
}
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
```
