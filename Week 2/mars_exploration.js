function marsExploration(s) {
    let changed_letters = 0;
    for (let i = 0; i < s.length; i += 3) {
        if (s[i] !== 'S') {
            changed_letters += 1
        }
        if (s[i + 1] !== 'O') {
            changed_letters += 1
        }
        if (s[i + 2] !== 'S') {
            changed_letters += 1
        }
    }
    return changed_letters;
}