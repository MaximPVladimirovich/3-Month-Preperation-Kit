function migratoryBirds(arr) {
    // Holds key of sighted bird
    let most_sighted = 0;
    let duplicates = []
    // Key/Value pairs are birds and occurences.
    let sightings = {};
    for (let i = 0; i < arr.length; i++) {
        sightings[arr[i]] === undefined ? sightings[arr[i]] = 1 : sightings[arr[i]] += 1;
        if (sightings[arr[i]] > most_sighted) {
            most_sighted = sightings[arr[i]]
        }
    }
    // Loop and add bird keys with the same values to the duplicates array.
    Object.keys(sightings).map(key => {
        if (sightings[key] === most_sighted) {
            duplicates.push(key);
        };
    })
    // Since the array is sorted, the lowest key value will be the first index.
    return duplicates[0]
}