var queryURL = "https://api.giphy.com/v1/gifs/random?s=cats&api_key=dc6zaTOxFJmzC";


$(".gif-button").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    })
})