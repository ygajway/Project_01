var now = moment();
var nowRead = moment().format("MM/DD/YYYY");
var userDateInput = moment("08/12/2012","MM/DD/YYYY");
var soberDate = userDateInput;
var soberYears = now.diff(soberDate,"years");
var soberMonths = (now.diff(soberDate,"months") - (soberYears * 12));
var soberDays = (now.diff(soberDate,"days") - ((soberYears * 365) + (soberMonths * 30)));
var soberNumber = $(".soberNumber");

function calcSober(){
    var soberContainer = $("<h2>");
    var years = now.diff(soberDate, 'years');
    soberDate.add(years, 'years');

    var months = now.diff(soberDate, 'months');
    soberDate.add(months, 'months');

    var days = now.diff(soberDate, 'days');

    var soberLength = (years + ' years ' + months + ' months ' + days + ' days');
    soberContainer.append(soberLength);
    soberNumber.append(soberContainer);

}

calcSober();