function flippingBits(n) {
    // ParseInt() formats/parses an integer into hexidecimal, binary, decimal, octal.
    // You can specify a second argument to convert correctly.
    // >>> is unsigned right shift, it turns the number into a 32 bit integer.
    return ~parseInt(n, 10) >>> 0;
}