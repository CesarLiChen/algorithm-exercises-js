// Given an array of arrays as input, 
// return a new array that contains the biggest 
// number from each subarray.

// This version will try and use JS's .map, and .reduce
// methods for arrays.

function largestOfThree(arr) {
    
    const resultArr = arr.map(
        subarray => subarray.reduce(
        	(a, b) => Math.max(a, b)
        )
    );

    return resultArr;
}