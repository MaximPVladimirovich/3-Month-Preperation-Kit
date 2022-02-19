/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const array = arr.sort();
    let max = array.slice(1).reduce((a, b) => a + b);
    let min = array.slice(0, array.length - 1).reduce((a, b) => a + b);
    
    console.log(min, max);
}