//longest Palindrome substring in a string using dynamic programming in javascript

const str = "abcba";
const length = str.length;

let MDArray = [];

function printArr(arr) {
  let result = "";
  arr.map((item) => (result += item + "    "));
  console.log(result + "\n");
}

for (let i = 0; i < length; i++) {
  const subArr = new Array(length).fill(false);
  subArr[i] = true;
  if (str[i + 1] && str[i] == str[i + 1]) subArr[i + 1] = true;
  MDArray.push(subArr);
}

let i = 0,
  j = 2;
let LPS = { start: 0, end: 0 };
for (let p = 2; p < length; p++) {
  j = p;
  i = 0;
  for (let k = 0; k < length; k++) {
    if (str[i] == str[j] && MDArray[i + 1][j - 1]) {
      MDArray[i][j] = true;
      LPS.start = i;
      LPS.end = j;
    }
    ++i;
    ++j;
    if (j > length) break;
  }
}

MDArray.map((item) => printArr(item));

const { start, end } = LPS;

if (start == end) {
  console.log("Not posible");
  return;
}

console.log("longest palindrom indexs are", start, end);
console.log("longest palindrom substring is", str.substring(start, end + 1));
