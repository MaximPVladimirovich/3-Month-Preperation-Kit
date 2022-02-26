function countingValleys(steps, path) {
    // Increases on U, decreases on D.
    let altitude = 0;

    let valleys = 0;
    let mountains = 0;

    for (let step in path) {
        // Increments altitude and if this step sets the altitude to zero then we know a valley has been finished.
        if (path[step] === 'U') {
            if (altitude === -1) {
                valleys += 1
            }
            altitude += 1
        // Same as previous if condition except for mountains.
        } else if (path[step] === 'D') {
            if (altitude === 1) {
                mountains += 1
            }
            altitude -= 1
        }
    }
    return valleys
}