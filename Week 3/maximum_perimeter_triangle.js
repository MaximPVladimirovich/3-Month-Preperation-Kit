function maximumPerimeterTriangle(sticks) {
    let max = 0;
    let str = ""
    for (var i = 0; i < sticks.length; i++) {
        for (var j = i + 1; j < sticks.length; j++) {
            for (var k = j + 1; k < sticks.length; k++) {
                if (sticks[i] + sticks[j] > sticks[k]
                    &&
                    sticks[j] + sticks[k] > sticks[i]
                    &&
                    sticks[i] + sticks[k] > sticks[j]
                ) {
                    if (sticks[i] + sticks[k] + sticks[j] > max) {
                        max = sticks[i] + sticks[k] + sticks[j];
                        str = sticks[i] + " " + sticks[j] + " " + sticks[k];
                    }
                }
            }
        }
    }
    return str === "" ? [-1] : str.split(' ').sort();
}