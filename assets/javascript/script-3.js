var now = moment();
var nowRead = moment().format("MM/DD/YYYY");
var localSoberDate = localStorage.getItem("soberDate")
var userDateInput = moment(localSoberDate,"MM/DD/YYYY");
var soberDate = userDateInput;
var soberYears = now.diff(soberDate,"years");
var soberMonths = (now.diff(soberDate,"months") - (soberYears * 12));
var soberDays = (now.diff(soberDate,"days") - ((soberYears * 365) + (soberMonths * 30)));
var soberNumber = $(".soberNumber");
var streakNumber = $(".streakNumber");
var checkIns = JSON.parse(localStorage.getItem("checkIns"));
var newEntryDate = checkIns[checkIns.length-1].date;
var oldEntryDate = checkIns[checkIns.length-2].date;
var newEntry = moment(newEntryDate,"MM/DD/YYYY");
var oldEntry = moment(oldEntryDate,"MM/DD/YYYY");
console.log(oldEntry);
var testDate1 = moment("10/28/2019","MM/DD/YYYY")
console.log(newEntry.diff(testDate1,"days"));

var counter = 0;

function calcSober(){
    var soberContainer = $("<h2>");
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
function calcStreak(){
    var streakContainer = $("<h2>");
    if (newEntry.diff(oldEntry) > 1) {
        counter = 0;
    }
    else if (newEntry.diff(oldEntry) == 1) {
        counter++;
    }
    streakNumber.append(streakContainer);
    streakContainer.append(counter);
}

calcSober();
calcStreak();
