var number = function isOdd (num) {
  let answer;
  (num % 2 === 0) ? answer = false :  answer = true;
  return answer;
};

console.log(number(3));