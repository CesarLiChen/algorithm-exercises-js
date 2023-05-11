// Given an array of arrays as input, 
// return a new array that contains the biggest 
// number from each subarray.

function largestOfThree(arr) {
    // Your code goes here
    let arrWithLargest = [];

    for (let i = 0; i < arr.length; i++) {

        // ...arr[i] spread operator ES6
        arrWithLargest[i] = Math.max(...arr[i]); 
    }

    return arrWithLargest;
}