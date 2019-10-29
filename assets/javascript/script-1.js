// var now = moment().format("L");
// var nameInput = $("#nameInput");
// var nameSubmit = $("#nameSubmit");
// var name = "";
// var userDateInput = moment(mInput.val() + "/" + dInput.val() + "/" + yInput.val(),"MM/DD/YYYY");
// var soberDate = userDateInput;
// var checkIn = [];
// var index = { date: now, mood: mScale, risk: rScale};

// function sendCheck(){
//     checkIn.push(index);
//     localStorage.setItem("Check-Ins",JSON.stringify(checkIn));
// }
// var savedChecks = JSON.parse(localStorage.getItem("Check-Ins"));

// soberSubmit.on("click",function(event){
//     event.preventDefault();
//     var name = nameInput.val();
//     localStorage.setItem("name",name);
//     nameInput.empty();
// })

var prompt0 = $("#prompt0");
var prompt1 = $("#prompt1");
var prompt2 = $("#prompt2");
var soberSubmit = $("#soberSubmit");

prompt0.hide();
prompt1.hide();
prompt2.hide();

$(document).ready(function(){
    prompt0.show();
    soberSubmit.on("click",function(){
        event.preventDefault();
        var name = nameInput.val();
        localStorage.setItem("name",name);
        var userDateInput = moment(mInput.val() + "/" + dInput.val() + "/" + yInput.val(),"MM/DD/YYYY");
        var soberDate = userDateInput;
        localStorage.setItem("soberDate",soberDate);
        prompt0.hide();
        prompt1.show();
    })
});