/*
Create a function that looks through an array 
(first argument) and returns the first element in 
the array that passes a truth test (second argument) 
as a given input. 
*/

// E.g.: 
// findElement([1, 2, 3, 4], num => num % 2 === 0); -> 2

function findElement(arr, func) {
    const num = arr.filter(func);
    return num[0];
}