/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let i = 0;
  let j = 1;
  while (i < nums.length - 1) {
    if (nums[i] === 0) {
      for (let l = i + 1; l < nums.length; l++) {
        if (nums[l] !== 0) {
          j = l;
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
    }

    i++;
  }
  return nums;
};
console.log(moveZeroes([1, 0]));
