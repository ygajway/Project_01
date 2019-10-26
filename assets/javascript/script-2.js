var gifURL = "https://api.giphy.com/v1/gifs/random?tag=cats&api_key=dc6zaTOxFJmzC";
var quoteURL = "http://api.forismatic.com/api/1.0/";
var jokeURL = "https://icanhazdadjoke.com/";
var proxy = "https://chriscastle.com/proxy/post.php?:proxy:";

//pressing gif button to create a random cat gif
$(".gif-button").on("click", function () {
    $.ajax({
        url: gifURL,
        method: "GET",
    }).then(function (response) {
        var newGif = $("<img>");
        newGif.attr("src", response.data.images.original.url);
        $("body").append(newGif);
    })
})

//pressing quote button to create a random quote
$(".quote-button").on("click", function () {
    $.ajax({
        method: "POST",
        data: {
            method:"getQuote",
            format:"json",
            lang:"en"
        },
        url: proxy + quoteURL,

    }).then(function (response) {
        console.log(response);
        //var newQuote = ("<div>");

    })
})

//pressing joke button to create a random dad joke
$(".joke-button").on("click", function(){
    $.ajax({
        accepts: {
            text: "application/json"
        },
        dataType: "json",
        url: jokeURL,
        method: "GET",
    }).then(function (response){
        var newJoke = $("<div>");
        newJoke.text(response.joke);
        $("body").append(newJoke);
    })
})