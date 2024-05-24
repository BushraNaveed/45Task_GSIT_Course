// Task  # 23
//Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car: string = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



let car: string = 'subaru'
console.log("\n----> 5 Test eveluate True:");

//Test 1:
console.log(" Is car == 'subaru'?I predict true.");
console.log( car === 'subaru');
//Test 2:
console.log("Is car != 'toyota'? I predict true?");
console.log( car !== 'toyota');
//Test 3:
console.log("Is the length of the car > 4 ?I predict true");
console.log(car.length > 4);
//Test 4:
console.log("Is the length of the car <= 6 ? I predict True.");
console.log(car.length <= 6);
//Test 5:
console.log("Does the car start with 's' ? I predict True.");
console.log(car.startsWith('s'));

console.log("\n------> 5 Test evaluate to False");

//Test 1:
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');
//Test 2:
console.log("Is car in uppercase ? I predict False.");
console.log(car.toUpperCase() === car);
//Test 3:
console.log("Is car === 'Subaru' ? I predict false.");
console.log(car === 'Subaru');
//Test 4:
console.log("Is car =='Audi' ? I predict false.");
console.log(car ==='Audi');
//Test 5:
console.log("Is of length car === 7 ? I predict false");
console.log(car.length === 7);

