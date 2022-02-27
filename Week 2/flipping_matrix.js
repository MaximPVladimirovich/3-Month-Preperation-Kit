/*Flipping the Matrix*/
function flippingMatrix(matrix) {
    // Write your code here
    let middle = (matrix.length / 2);
    let dim = matrix.length;
    let sum = 0;

    for (let i = 0; i < middle; i++) {
        for (let j = 0; j < middle; j++) {
            a = Math.max(matrix[i][j], matrix[dim - 1 - i][j]);
            b = Math.max(matrix[i][dim - 1 - j], matrix[dim - 1 - i][dim - 1 - j]);
            sum += Math.max(a, b);
        }
    }

    return sum;

}