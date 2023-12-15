function containerWithMostWater(height) {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i != j) {
    let ht = Math.min(height[i], height[j]);
    let wdth = j - i;
    let multiply = ht * wdth;
    if (multiply > area) {
      area = multiply;
    }
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      function check(k, l) {
        if (k == l) {
          return "left";
        } else if (height[k] < height[l]) {
          return "left";
        } else if (height[l] < height[k]) {
          return "right";
        } else {
          return check(k + 1, l - 1);
        }
      }

      let whichNextElememtIsMin = check(i + 1, j - 1);
      if (whichNextElememtIsMin == "left") {
        i++;
      } else {
        j--;
      }
    }
  }
  return area;
}
console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
