function gradingStudents(grades) {
    // Store rounded grades.
    let results = [];

    // We only need to check the next two numbers since the difference has to be less than 3.
    grades.forEach(g => {
        if (g < 38) {
            results.push(g);
        } else if ((g + 1) % 5 === 0) {
            results.push(g + 1);
        } else if ((g + 2) % 5 === 0) {
            results.push(g + 2);
        } else {
            results.push(g);
        }
    })
    return results;
}

// Possible future improvements.
// Create a function that takes in a number and returns true or false if that number is divisible by 5.