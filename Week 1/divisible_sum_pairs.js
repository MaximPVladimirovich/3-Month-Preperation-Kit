function divisibleSumPairs(n, k, ar) {
    // Store pairs
    let results = [];
    // First num in pair
    for (let i = 0; i < n; i++) {
        // Second num in pair
        for (let j = i + 1; j < n ; j++) {
            // Comparison
            if ((i < j) && ((ar[i] + ar[j]) % k === 0)) {
                results.push([ar[i], ar[j]]);
            }
        }
    }
    // Returns how many pairs are found.
    return results.length;
}