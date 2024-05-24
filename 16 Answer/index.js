// task # 16
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var Guest_list = ["Mubashir", "Awais", "Khawer"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited in dinner! \n"));
}
console.log("\"Unforently ".concat(Guest_list[1], ", can't come to dinner\""));
Guest_list[1] = "Naveed";
console.log(" \n New list of invitation : \n");
for (var j = 0; j < Guest_list.length; j++) {
    console.log("Dear ".concat(Guest_list[j], " : \n you are invited in dinner! \n"));
}
console.log(" Congratulations! Now we have found a bigger Dinner Table, So our new guests are :\n ");
Guest_list.unshift("Armeen");
Guest_list.splice(2, 0, "Hiba");
Guest_list.push("Maham");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited in dinner! \n"));
}
