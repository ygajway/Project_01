var gifURL = "https://api.giphy.com/v1/gifs/random?tag=cats&api_key=dc6zaTOxFJmzC";
var quoteURL = "https://quote-garden.herokuapp.com/quotes/random";
var jokeURL = "https://icanhazdadjoke.com/";
var proxy = "https://chriscastle.com/proxy/post.php?:proxy:";

//pressing gif button to create a random cat gif
$(".gif-button").on("click", function () {
    $(".gif-container").empty();
    $(".joke-container").empty();
    $(".quote-container").empty();
    $.ajax({
        url: gifURL,
        method: "GET",
    }).then(function (response) {
        var newGif = $("<img>");
        newGif.attr("src", response.data.images.original.url);
        $(".gif-container").append(newGif);
    })
})

//pressing quote button to create a random quote
$(".quote-button").on("click", function () {
    $(".gif-container").empty();
    $(".joke-container").empty();
    $(".quote-container").empty();
    $.ajax({
        method: "GET",
        url: quoteURL,
    }).then(function (response) {
        var newQuote = $("<div>");
        newQuote.text(response.quoteText);
        $(".quote-container").append(newQuote);
    })
})

//pressing joke button to create a random dad joke
$(".joke-button").on("click", function () {
    $(".gif-container").empty();
    $(".joke-container").empty();
    $(".quote-container").empty();$.ajax({
        accepts: {
            text: "application/json"
        },
        dataType: "json",
        url: jokeURL,
        method: "GET",
    }).then(function (response) {
        var newJoke = $("<div>");
        newJoke.text(response.joke);
        $(".joke-container").append(newJoke);
    })
})

//pressing music button to create music player
$(".music-button").on("click", function () {

})