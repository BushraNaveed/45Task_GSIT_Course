const personName = "Bushra Noreen";

console.log(`Name in uppercase  : ${personName.toUpperCase()}`);

console.log(`Name in lowercase  : ${personName.toLowerCase()}`);

console.log("titlecase:", personName.replace(/\b\w/g,c => c.toUpperCase()));