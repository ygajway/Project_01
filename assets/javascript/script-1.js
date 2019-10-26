var now = moment().format("L");
var nameInput = $("#nameInput");
var nameSubmit = $("#nameSubmit");
var name = "";
var checkIn;
// var index = { date: now, mood: mScale, risk: rScale};

function sendCheck(){
    checkIn.push(index);
    localStorage.setItem("Check-Ins",JSON.stringify(checkIn));
}
var savedChecks = JSON.parse(localStorage.getItem("Check-Ins"));

nameSubmit.on("click",function(event){
    event.preventDefault();
    var name = nameInput.val();
    localStorage.setItem("name",name);
    nameInput.empty();
})