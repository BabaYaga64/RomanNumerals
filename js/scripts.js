var romanNumerals = function(input) {

    var decrementing_total = input;
    var output = "";
    var fives = 0;
    var ones = 0;

    tens = Math.floor(decrementing_total/10);
    var i = 0;
    while (i < tens) {
        output += "X";
        i++
    }

    fives = Math.floor(decrementing_total/5);
    var i = 0;
    while (i < fives) {
        output += "V";
        i++;
    }

    decrementing_total -= (fives * 5);
    if (decrementing_total === 4) {
        output += "IV";
    }
    else {
        ones = decrementing_total;
        i = 0;
        while (i < ones ) {
            output += "I";
            i++;
        }
    }

    return output;

};
