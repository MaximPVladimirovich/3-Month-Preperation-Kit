function sockMerchant(n, ar) {
    let pairs = {};
    let sum_of_pairs = 0;
    
    for (let i = 0; i < ar.length; i++) {
        pairs[ar[i]] === undefined ? pairs[ar[i]] = 1 : pairs[ar[i]] += 1;
    }
    Object.keys(pairs).map(key => {
        sum_of_pairs += Math.floor(pairs[key] / 2);
    })
    return sum_of_pairs;
}