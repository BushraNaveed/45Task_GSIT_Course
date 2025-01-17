// TasK # 45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // allow any additional properties
}

function carInfo(manufacturer: string, modelName: string, options: Partial<Car>): Car {
    return{
        manufacturer: manufacturer,
        modelName: modelName,
        ...options
    };
}

// Call the function with required information and additional names value pairs
let car = carInfo('Toyota', '5858', { color:'blue', year: 2022 });

// print the required object
console.log(car);










































