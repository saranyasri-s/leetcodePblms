var productExceptSelf = function (nums) {
  let answer = new Array(nums.length).fill(0);
  let zerosIndex = [];
  let multiply = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      multiply = multiply * nums[i];
    } else {
      zerosIndex.push(i);
    }
  }
  if (zerosIndex.length > 1) {
  } else if (zerosIndex.length === 1) {
    answer[zerosIndex[0]] = multiply;
  } else {
    for (let i = 0; i < nums.length; i++) {
      let ans = multiply / nums[i];
      answer[i] = ans;
    }
  }

  return answer;
};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
