var findDisappearedNumbers = function (nums) {
  let result = [];
  let lastNum = nums.length;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let i = 1; i <= lastNum; i++) {
    if (!obj[nums[i]]) {
      result.push(i);
    }
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
