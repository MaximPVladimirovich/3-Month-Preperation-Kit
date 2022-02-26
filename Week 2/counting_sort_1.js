function countingSort(arr) {
    // New array with 100 indexes and all set to 0.
    const result = new Array(100).fill(0);
    arr.forEach((number) => {
        result[number] += 1;
    })
    return result;
}