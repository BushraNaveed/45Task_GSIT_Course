// Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Creat an array of magiician's names 
let magicians: string[] = ["Akber Ali", "Haris", "Zahid"];
function show_magicians1(magicians: string[]): void {
    magicians.forEach(magician =>
        console.log(magician));

}


// Call the function to show the magicians
show_magicians1(magicians);

