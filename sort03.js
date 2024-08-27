function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

function bubbleSortWithDestructuring(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
}

const randomArrayDestructuring = generateRandomArray(10, 100);
console.log('만들어진 배열:', randomArrayDestructuring);

const sortedArrayDestructuring = bubbleSortWithDestructuring(
  randomArrayDestructuring,
);
console.log('정렬된 배열:', sortedArrayDestructuring);
