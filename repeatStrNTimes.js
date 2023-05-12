function repeatStrNTimes(str, times) {
    // Recursive way, for practice.
    if (times <= 1) {
        return str;
    } else {
         // or --times NOT times--
        return str + repeatStrNTimes(str, times - 1);
    }

    // One line, with ternary operator.
    // return (times > 0 ) ? str.repeat(times) : "";
}