// let Guest_list: string [] =["Mubashir", "Awais", "Khawer"];
var Guest_list = ["Mubashir", "Awais", "Khawer"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited in dinner! \n"));
}
console.log("\"Unfortunately ".concat(Guest_list[1], ", can't come to dinner\""));
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
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n");
while (Guest_list.length > 2) {
    var notInvited = Guest_list.pop();
    console.log("Sorry,Due to limited space we can't invite you to Dinner Respected,".concat(notInvited, "\n"));
}
Guest_list.pop();
Guest_list.pop();
console.log(Guest_list);