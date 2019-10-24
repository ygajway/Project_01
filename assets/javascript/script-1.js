var now = moment().format("L");
var checkIn;
var index = { date: now, mood: mScale, risk: rScale};

function sendCheck(){
    checkIn.push(index);
    localStorage.setItem("Check-Ins",JSON.stringify(checkIn));
}
var savedChecks = JSON.parse(localStorage.getItem("Check-Ins"));