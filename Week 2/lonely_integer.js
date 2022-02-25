function lonelyinteger(a) {
    // New object to store quantities.
    let quantity = {};
    // Iterate over array.
    a.forEach(element => {
        // Sets initial value of key or increments.
        quantity[element] === (null || undefined) ? quantity[element] = 1 : quantity[element] += 1;  
    })
    // Loops over object and finds a key with a value of 1.
    for (let key in quantity) {
        if (quantity[key] === 1) {
            return key
        }
     }
}