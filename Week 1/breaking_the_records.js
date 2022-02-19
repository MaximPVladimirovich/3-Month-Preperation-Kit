function breakingRecords(scores) {
    // Times highest and lowest record have been broken.
    let min_broken = 0;
    let max_broken = 0;
    
    // Current record value.
    let minimum = scores[0];
    let maximum = scores[0]
    
    scores.forEach(score => {
        if (score > maximum) {
            max_broken += 1;
            maximum = score;
        } else if (score < minimum) {
            min_broken += 1;
            minimum = score;
        } else {
            // pass
        }
    })
    return [max_broken, min_broken]
}