//Task # 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
var str1 = "Mubashir";
var str2 = "Khawer";
var num1 = 5;
var num2 = 10;
var Arr = [1, 2, 3, 4, 5];
// 1 - Test for equality and inequality with string
console.log("Test of equality and unequality of string");
console.log(str1 === "Mubashir");
console.log(str1 === str2);
// 2 - Test using lower Case Function
console.log("\n Test using lower Case Function");
console.log(str1.toLowerCase() === "mubashir");
console.log(str2.toLoverCase() !== "khawer");
//3 - Numarical Test
console.log("\n Numarical test ");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//4 -  Test using "and" & "or" operation
console.log("\n Test using 'and' & 'or' operator ");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num > 15));
//5 - Test whether an item is in an array
console.log("\n Test whether an item is in an array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
// 6 - Test whether an item is not in an array
console.log("\n Test whether an item is not in an array ");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
