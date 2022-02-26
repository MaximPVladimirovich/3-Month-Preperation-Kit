function diagonalDifference(arr) {
    let right_to_left = 0;
    let left_to_right = 0;

    let current_num = 0;
    arr.forEach(row => {
        // Right to left diagonal.
        right_to_left += row[current_num];
        // Reverse diagonal to get left to right.
        left_to_right += row.reverse()[current_num]

        current_num += 1;
    })

    let result = Math.abs(right_to_left - left_to_right);
    return result;
}