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

//TASKS ВИЗНАЧЕННЯ КВАРТАЛУ МІСЯЦЯ______________________________
// const quarterOf = (month) => {
//   return Math.ceil(month / 3);

//   ///АБО ТАК

//   //   if (month <= 3) {
//   //     return 1;
//   //   } else if (month <= 6) {
//   //     return 2;
//   //   } else if (month <= 9) {
//   //     return 3;
//   //   } else if (month <= 12) {
//   //     return 4;
//   //   }

//   //або switch
//   //   switch (month) {
//   //     case 1:
//   //     case 2:
//   //     case 3:
//   //       quarter = 1;
//   //       break;
//   //     case 4:
//   //     case 5:
//   //     case 6:
//   //       quarter = 2;
//   //       break;
//   //     case 7:
//   //     case 8:
//   //     case 9:
//   //       quarter = 3;
//   //       break;
//   //   }
//   //   return quarter;
// };
// //

// console.log(quarterOf(3)); //1
// console.log(quarterOf(8)); //3
// console.log(quarterOf(11)); //4
// console.log(quarterOf(5)); //2

//TASK 6 ВЕЛИКА ПЕРША ЛІТЕРА_______________________________

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalizeWord('hi'));
// console.log(capitalizeWord('Hi'));
// console.log(capitalizeWord('ggregerger'));
