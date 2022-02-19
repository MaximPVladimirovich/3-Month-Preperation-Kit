/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let pos = [],
    zero = [],
    neg = [];
    
    arr.forEach(num => {
        num > 0 ? pos.push(num) : num === 0 ? zero.push(num) : num < zero ? neg.push(num) : neg.push(num)
    })
    
    console.log((pos.length / arr.length).toFixed(6));
    console.log((neg.length / arr.length).toFixed(6));
    console.log((zero.length / arr.length).toFixed(6));

}