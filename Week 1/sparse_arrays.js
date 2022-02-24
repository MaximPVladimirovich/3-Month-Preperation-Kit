function matchingStrings(strings, queries) {
    let results = [];

    // Loop over queries.
    queries.forEach(q => {
        // Returns array of strings that match query.
        let q_amount = strings.filter(string => {
            return string === q;
        })
        // Adds length(amount) of queries to th results array.
        results.push(q_amount.length);
    })
    return results
}