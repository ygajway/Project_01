var now = moment();
var nowRead = moment().format("MM/DD/YYYY");
var localSoberDate = localStorage.getItem("soberDate")
var soberDate = moment(localSoberDate,"MM/DD/YYYY");
var soberNumber = $(".soberNumber");
var streakNumber = $(".streakNumber");
var checkIns = JSON.parse(localStorage.getItem("checkIns"));

if (!checkIns) {
    streakNumber.text("Please check in at least twice to see your daily streak.");
}
else if (!checkIns) {
    streakNumber.text("Please check in at least twice to see your daily streak.");
}
else {
    var newEntryDate = checkIns[checkIns.length-1].date;
    var oldEntryDate = checkIns[checkIns.length-2].date;
    var newEntry = moment(newEntryDate,"MM/DD/YYYY");
    var oldEntry = moment(oldEntryDate,"MM/DD/YYYY");
    function calcStreak(){
        var streakContainer = $("<h2>");
        if (newEntry.diff(oldEntry) > 1) {
            counter = 0;
        }
        else if (newEntry.diff(oldEntry) == 1) {
            counter++;
        }
        streakNumber.append(streakContainer);
        streakContainer.append(counter + "days");
    }
    calcStreak();
}

var counter = 0;

function calcSober(){
    var soberContainer = $("<h2>");
    if (!localSoberDate) {
        soberNumber.text("Please click the settings button to establish the start of your clean streak.")
    }
    else {
        var years = now.diff(soberDate, 'years');
        if (years != 0) {
            soberDate.add(years, 'years');
        }

        var months = now.diff(soberDate, 'months');
        soberDate.add(months, 'months');
        

        var days = now.diff(soberDate, 'days');
        if (years != 0) {
            var soberLength = (years + ' years ' + months + ' months ' + days + ' days');
        }
        else if (years == 0 && months == 0) {
            var soberLength = (days + ' days');
        }
        else if (years == 0) {
            var soberLength = (months + ' months ' + days + ' days');
        }
        soberContainer.append(soberLength);
        soberNumber.append(soberContainer);
    }
}

calcSober();
