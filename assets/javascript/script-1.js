var now = moment().format("L");
var prompt0 = $("#prompt0");
var prompt1 = $("#prompt1");
var prompt2 = $("#prompt2");
var alertBox = $("#alertBox");
var soberSubmit = $("#soberSubmit");
var nameInput = $("#nameInput");
var mInput = $("#mInput");
var dInput = $("#dInput");
var yInput = $("#yInput");
var smiley1 = $(".smiley1");
var smiley2 = $(".smiley2");
var checkInArray = [];



prompt0.hide();
prompt1.hide();
prompt2.hide();
alertBox.hide();

function intro(){
    prompt0.show();
    soberSubmit.on("click",function(){
        event.preventDefault();
        var name = nameInput.val();
        localStorage.setItem("name",name);
        console.log(mInput.val());
        console.log(dInput.val());
        console.log(yInput.val());
        var userDateInput = moment(mInput.val() + "/" + dInput.val() + "/" + yInput.val(),"MM/DD/YYYY");
        var soberDate = userDateInput;
        console.log(soberDate);
        localStorage.setItem("soberDate",soberDate);
        prompt0.hide();
        checkIn();
    });
}
function checkIn(){
    checkInArray = JSON.parse(localStorage.getItem("checkIns")) || [];
    prompt1.show();
    smiley1.on("click",function(){
        console.log("Mood: " + $(this).data("value"));
        var mScale = $(this).data("value");
        prompt1.hide();
        prompt2.show();
        smiley2.on("click",function(){
            console.log("Risk: " + $(this).data("value"));
            var rScale = $(this).data("value");
            prompt2.hide();
            var index = { date: now, mood: mScale, risk: rScale};
            checkInArray.push(index);
            localStorage.setItem("checkIns",JSON.stringify(checkInArray));
            alertBox.text("Thanks for checking in today!").show();
        });
    });
}

$(document).ready(function(){
    if(!localStorage.getItem("name")) {
        intro();
    }
    else {
        checkIn();
    }
    
});