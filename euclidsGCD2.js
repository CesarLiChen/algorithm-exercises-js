// Euclid's algorithm for Greatest Common Divisor (GCD).
// More efficient version, with remainder.
// Following this:
// https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclidean_algorithm
// implementation.

function euclids2(n1, n2) {
    // makes sure n1 is biggest.
    if (n2 > n1) {
        let tmp = n1;
        n1 = n2;
        n2 = tmp;
    }
    
    while (n2 != 0) {
        
        let tmp = n1;
        n1 = n2;
        n2 = tmp % n2
    }
    
    return n1;
}