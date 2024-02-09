var construct2DArray = function (original, m, n) {
  let startIndex = 0;
  let endIndex = 1 * n;
  let newArr = [];

  let originalLength = original.length;
  if (m * n !== originalLength) {
    return [];
  }
  for (let i = 1; i <= m; i++) {
    let subArr = original.slice(startIndex, endIndex);
    newArr.push(subArr);

    startIndex = endIndex;
    endIndex = (i + 1) * n;
  }
  return newArr;
};

// console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 2, 3, 4], 2, 2));
