//Task # 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
//import { clearScreenDown } from "readline";
var guest_list = ["Mubashir", "Ovais", "Khawar"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], " : \n you are invited to dinner! \n"));
}
