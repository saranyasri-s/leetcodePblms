// var construct2DArray = function (original, m, n) {
//   let startIndex = 0;
//   let endIndex = 1 * n;
//   let newArr = [];

//   let originalLength = original.length;
//   if (m * n !== originalLength) {
//     return [];
//   }
//   for (let i = 1; i <= m; i++) {
//     let subArr = original.slice(startIndex, endIndex);
//     newArr.push(subArr);

//     startIndex = endIndex;
//     endIndex = (i + 1) * n;
//   }
//   return newArr;
// };
// /**
//  * @param {number[]} original
//  * @param {number} m
//  * @param {number} n
//  * @return {number[][]}
//  */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  let resultArr = [];
  let start = 0;
  let end = n;
  for (let i = 1; i <= m; i++) {
    let subArr = original.slice(start, end);

    start = end;
    end = (i + 1) * n;
  }
  return resultArr;
};
// console.log(construct2DArray([1, 2, 3], 1, 3));
// console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 2, 3, 4], 2, 2));
