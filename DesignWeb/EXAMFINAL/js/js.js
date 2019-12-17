$("#manga").click(function() {
    if ($('#manga2').attr("src") === "img/manga.png")
        $('#manga2').attr("src", "img/manga2.png");
    else if ($('#manga2').attr("src") === "img/manga2.png")
        $('#manga2').attr("src", "img/manga.png");});

$(function () {
    $('.example-popover').popover({
        container: 'body'
    })
})