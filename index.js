// Variables
// The Age Calculator
// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate the age based on the stored values.
// Output to the screen like so: "Your age is NN".

// var birthYear = 2001;
// var currentYear  = 2022;
// var age  = currentYear - birthYear;
// console.log('Your age is ' + age);

//another way of calculating age

// let dateOfBirth = new Date("1995-05-26").getFullYear();
// let currentYear = new Date().getFullYear();
// console.log(currentYear - dateOfBirth);
// -------------------------------------------------------------------

// Switch statement
// Declare a variable and assign number to it from 1 to 7
// Use switch statement to print the day's name based on its number (print "Sunday" if the number is 1, "Monday" if the number is 2, ...)

// let day = 5;
// let dayNames;

// switch (day) {
//   case 1:
//     dayNames = 'Sunday';
//     break;
//   case 2:
//     dayNames = 'Monday';
//     break;
//   case 3:
//     dayNames = 'Tuesday';
//     break;
//   case 4:
//     dayNames = 'Wednesday';
//     break;
//   case 5:
//     dayNames = 'Thursday';
//     break;
//   case 6:
//     dayNames = 'Friday';
//     break;
//   case 7:
//     dayNames = 'Saturday';
//     break;
//   default:
//     dayNames = 'Invalid day';
// }

// console.log(dayNames); // Tuesday
// -------------------------------------------------------------------

// If else statement

// even & odd numbers
// Declare a variable and assign number to it
// Write if else statement to check if that number you entered is even or odd and print the result in the console

// var num = 5;
// if(num % 2 == 0) {
//     console.log("Number "+num + ' is even!');
// } else {
//     console.log("Number "+num + ' is odd!');
// }
// -------------------------------------------------------------------


// Write this question using if else statment, that is if:
// Grade is 90 and above is an A
// Grade of 80 to 89 is a B
// Grade of 70 to 79 is a C
// Grade of 60 to 69 is a D
// Grade of 59 or below is a F

// let grade = 88;

//     if (grade <= 100 && grade >= 90){
//           console.log("Gread A")
//     }

//     else if(grade <= 89 && grade >= 80){
//           console.log("Gread B")
//     }

//     else if(grade <= 79 && grade >= 70){
//           console.log("Gread C")
//     }

//     else if(grade <= 69 && grade >= 60){
//           console.log("Gread D")
//     }

//     else if(grade < 60 ){
//           console.log("Gread F")
//     }

// -------------------------------------------------------------------


// Leap year
// A leap year (also known as an intercalary year or bissextile year) is a calendar year that contains an additional day (or, in the case of a lunisolar calendar, a month) added to keep the calendar year synchronized with the astronomical year or seasonal year.

// Declare a variable and assign year to it
// Hint: to know if the year is leap or not:
// The year must be divisible by 4 AND not divisible by 100 OR the year divisible by 400
// print appropriate message that show the year and if it's leap year or not


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(50));

// -------------------------------------------------------------------


// For loop
// Fibonacci sequence:
// Write a program that prints the first 20 elements of Fibonacci sequence:

// Fibonacci sequence is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers, and the first two elements are 0 and 1

// it starts like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..



// function printFibonacciNumbers(n)
// {
//     let F1 = 0, F2 = 1, i;
 
//     if (num < 1)
//         return;
//     console.log(F1 + " ");
//     for (i = 1; i < num; i++) {
//         console.log(F2 + " ");
//         let next = F1 + F2;
//         F1 = F2;
//         F2 = next;
//     }
// }

// printFibonacciNumbers(20);

// -------------------------------------------------------------------

// squares of numbers
// using for loop print the squares of numbers from 1-10


// function NumberAndSquare(number ,size){ 
//     for(i= number; i <= size; i++) { 
//           console.log("The Square of Number " + i  +" is " + i*i ); 
//     } 
//   } 

//   NumberAndSquare(1, 10);

// -------------------------------------------------------------------


// Multiplication table
// Write a nested loop that print the multiplication table for number from 1-5

// var result = ' x   ';

// function buff(val){
//   var buff = '';
//   var pad = 4 - val;
//     while( pad-- > 0 )
//             buff += ' ';            
//   return buff;
// }

// for (var i = 0; i < 11; i++) {
//     for (var j = 0; j < 11; j++) {
//         if(i == 0 && j > 0){
//           result += '[' + j + ']' + buff((j+'').length+2);
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + ']';
//         } 
//         else if(i>0 && j>0){
//         result += buff((i*j+'').length ) + i*j;
//         }
//     }
//     result += '\n'
// }

// console.log(result);


//another way

// let arrayOfnums = [];
// let numberTable = [];
// for (let i = 1; i<=5; i++){
//     // console.log("multiplication table for number", i);
//     for(let j = 1; j <= 10; j++){
//         arrayOfnums.push(i * j)
//     }
//     numberTable.push(arrayOfnums)
//     arrayOfnums = [];
// }

// console.log(numberTable);

// -------------------------------------------------------------------


// odd numbers
// Using while loop print odd numbers from 1-20

// var i=1;
// while (i <=20){
//     console.log (i);
//     i +=2;
// }

// -------------------------------------------------------------------


// power of 2
// Using while Write a program that prints true if a number is a power of 2, and 0 otherwise


// function isPowerOfTwo(num){
//     if (num == 0)
//         return false;

//     return parseInt(Math.ceil((Math.log(num) / Math.log(2))));
// }

 
// if (isPowerOfTwo(4))
//     console.log("Yes");
// else
//     console.log("No");


// -------------------------------------------------------------------

