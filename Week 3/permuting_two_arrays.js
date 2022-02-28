function twoArrays(k, A, B) {
    let first = A.sort((a, b) => a - b);
    let second = B.sort((a, b) => b - a);

    function greaterThanK(element, index) {
        return element + second[index] >= k;
    }

    let r = first.every(greaterThanK);
    return r ? 'YES' : 'NO';
}