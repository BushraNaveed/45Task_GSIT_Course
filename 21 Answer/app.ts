 // Task # 21 
//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.



 interface type {
    Name:string, Age:number, Profession:string
}

let OBJ:type = {Name:'Mubashir', Age:30 , Profession:'Bussiness Man'};

console.log('\n Object Containing Information About Me :');
console.log(`My Name is ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} years old`);
console.log(`I am a ${OBJ.Profession}`);