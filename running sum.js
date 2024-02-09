function runningSum(arr) {
  let newarr = [];
  if (arr.length == 0) {
    return newarr;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    newarr.push(sum);
  }
  return newarr;
}

console.log(runningSum([1, 2, 3, 4]));
