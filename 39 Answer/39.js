// City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karachi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United kingdom"));
console.log(city_country("Riyad", "Saudi Arabia"));