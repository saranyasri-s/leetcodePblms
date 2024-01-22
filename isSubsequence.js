function isSubsequence(s, t) {
  let sArr = s.split("");
  let tArr = t.split("");
  let i = 0;
  let j = 0;
  if (sArr.length > tArr.length) {
    return false;
  }

  while (i < sArr.length) {
    if (sArr[i] === tArr[j]) {
      i++;
      j++;
    } else {
      j++;
    }
    if (j >= tArr.length && i < sArr.length) {
      return false;
    }
  }
  return true;
}
console.log(isSubsequence("abc", "ahbgdc"));
