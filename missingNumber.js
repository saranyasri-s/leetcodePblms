function missingNumber(nums) {
  let maxNum = nums.length;

  let arr = new Array(maxNum + 1);
  arr[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!arr[nums[i]]) {
      arr[nums[i]] = 1;
    } else {
      arr[nums[i]]++;
    }
  }
  let reuulstArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == undefined) {
      reuulstArr.push(i);
    }
  }
  return reuulstArr;
}
console.log(missingNumber([4, 3, 2, 7, 8, 2, 3, 1]));
