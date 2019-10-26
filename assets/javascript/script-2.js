var queryURL = "https://api.giphy.com/v1/gifs/random?tag=cats&api_key=dc6zaTOxFJmzC";


$(".gif-button").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var newGif = $("<img>");
        newGif.attr("src",response.data.images.original.url);
        $("body").append(newGif);
    })
})