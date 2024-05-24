// Task # 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

let Guest_list : string [] =["Mubashir", "Awais", "Khawer"];


for (let i=0; i< Guest_list.length; i++){
    console.log(`Dear ${Guest_list[i]} : \n you are invited in dinner! \n`);
}



console.log(`"Unforently ${Guest_list[1]}, can't come to dinner"`);



Guest_list[1] = "Naveed";


console.log( " \n New list of invitation : \n" );


for (let j=0; j< Guest_list.length; j++){
    console.log(`Dear ${Guest_list[j]} : \n you are invited in dinner! \n`);
}