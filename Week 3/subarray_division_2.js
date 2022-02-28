function birthday(s, d, m) {
    const arr = s;
    // Sum of segment should equal d.
    const segment_sum = d;
    // Length of segment should equal m.
    const segment_length = m;
    // Stored segments that match.
    let r = [];

    arr.forEach(function (num, index) {
        // Grabs a subarray from  current index to Ron's birth month.
        let segment = arr.slice(index, index + segment_length);
        // Sums total of the segment.
        let sum = segment.reduce((a, b) => a + b);
        // Stores the result if it matches Ron's Day.
        if (sum === segment_sum) {
            r.push(segment);
        }
    })
    return r.length;
}