/*
Write a function that will take any given year and return whether it is a leap year or not. Leap year is:
- Every year that is evenly divisible by 4
- Except if it is evenly divisible by 100
- Unless it is also divisible by 400
- Test Data... Make sure it is working!

1997 is not a leap year, it should return false
1996 is a leap year, it should return true
1900 is not a leap year, it should return false
2000 is a leap year, it should return true
*/

function isLeapYear() {
  var year = window.prompt("Enter a year: ")

  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    return true;
  }

  return false;
}

console.log(isLeapYear());


