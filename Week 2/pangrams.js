function pangrams(s) {
    let is_pangram = new Set(s.toLowerCase().match(/[a-z]/g)).size == 26 ? 'pangram' : 'not pangram';
    return is_pangram;
}