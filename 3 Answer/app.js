var personName = "Bushra Noreen";
console.log("Name in uppercase  : ".concat(personName.toUpperCase()));
console.log("Name in lowercase  : ".concat(personName.toLowerCase()));
// function toTitleCase(str: string): string {
//   return str.replace(/\w\b/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
// }
// console.log("Titlecase: " + toTitleCase(personName));
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
