//                Task # 25
//Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.



let alien_color: string = 'green';
if (alien_color ==='green'){
    console.log("Congratulations! You just earned 10 points!")
}

alien_color = 'red';

if(alien_color === 'green'){
    console.log("Congratulations!You just earned 5 points!");
}