// Euclid's algorithm for Greatest Common Divisor (GCD).
// Less efficient version.

function euclids(n1, n2) {

    if (n1 == 0) {
        return n2;
    } else if (n2 == 0) {
        return n1;
    } else {

        while (n1 != n2) {
            if (n1 > n2) n1 -= n2
            if (n1 < n2) n2 -= n1
        }

        return n1;
    }
}