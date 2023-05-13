// Combines an array into another array at specified
// position 'n'.

//E.g: splicer([1, 2, 3], ['a', 'b', 'c'], 2);
// ==> ['a', 'b', 1, 2, 3, 'c']

function splicer(arr1, arr2, n) {
    arr2.splice(n, 0, ...arr1); // spread syntax used
    return arr2;
}
