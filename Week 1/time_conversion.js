/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Grabs just the time with no PM/AM
    let t = s.slice(0, s.length-2)
    
    // End with AM?
    let isAM = s.endsWith('AM');
    
    // Splits array
    let spliced = t.split(':');
    
    // Grabs hour.
    let hour = parseInt(spliced[0]);
    
    if (!isAM) {
        let milHour = hour >= 12 ? hour : 12 + hour;
        spliced.splice(0, 1, milHour);
        let r = spliced.join(':');
        return r
    } else if (isAM) {
        let milHour = hour >= 12 ? hour - 12 : hour;
        milHour = "0" + milHour.toString()
        spliced.splice(0, 1, milHour);
        let r = spliced.join(':');
        return r
    }
}