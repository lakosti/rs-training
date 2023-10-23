//TASK 1 EVEN OR ODD_____________________________

// function testEven(n) {
//     //  return !(n%2) ? true: false
//     return !(n%2)
// }
// console.log(testEven(1));
// console.log(testEven(2));
// console.log(testEven(0));
// console.log(testEven(0.5));
// console.log(testEven(1));
// console.log(testEven(-4));

//TASK 2 RETURN NEGATIVE NUM________________________________

// function makeNegative(num) {
//     return num > 0 ? - num: num
// }
// console.log(makeNegative(5));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));

//TASK 3 to get /  return number from string_____________________________

// function getAge(inputString) {
//   return Number(inputString.replace(/\D/g, ''));
// }

//more simply

// function getAge(inputString) {
//   return parseInt(inputString);
// }

// console.log(getAge('years 5 old')); // NaN
// console.log(getAge('4 years old')); // 4

//TASK 4 The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise________________________________________________

// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }
// console.log(setAlarm(true, false)); // true
// console.log(setAlarm(true, true)); // false
// console.log(setAlarm(false, true)); // false

//TASK 5 to get
// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : (l + w) * 2;
// };

// console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10));
