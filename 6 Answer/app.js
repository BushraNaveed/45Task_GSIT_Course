"use strict";
//  Task 06 :Stripping Names: Store a person’s name, and include some whitespace characters at the beginning nd end of the name. Make sure you use each character combination, "\t" and "\n", at least once.Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var Namewithwhitespace = "\n\t   BushraNaveed   \t\n";
console.log(Namewithwhitespace);
var Namewithoutwhitespace = Namewithwhitespace.trim();
console.log(Namewithoutwhitespace);
