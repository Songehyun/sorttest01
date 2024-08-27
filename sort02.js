function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

function compare(a, b) {
  return a - b;
}

function bubbleSortDeclarative(arr) {
  return arr.sort(compare);
}

const randomArrayDeclarative = generateRandomArray(10, 100);
console.log('만들어진 배열:', randomArrayDeclarative);

const sortedArrayDeclarative = bubbleSortDeclarative(randomArrayDeclarative);
console.log('정렬된 배열:', sortedArrayDeclarative);
