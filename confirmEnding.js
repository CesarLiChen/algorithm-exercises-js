// Two parameters given str, and target.
// We need to check if the str 'ends' with the target given.
// Examples: 
// confirmEnding("Orange", "e") -> true
// confirmEnding("Xylophone", "i") -> false

function confirmEnding(str, target) {

    // First solution. Incorrect, turns out 'target' can be a word too.
    // return str.charAt(str.length - 1) === target;

    return str.substring(str.length - target.length) === target;
    // return str.endsWith(target); // Even easier solution
}