//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");



$( "#boutonDroite" ).click(function() {
    $( "#flashID" ).animate({ "left": "+=100px" });
});


HUGE BOOBS TEEN, TINY WAIST - ADDISSON, BUSTY SENSATION HARDCORE DEBUT !HUGE BOOBS TEEN, TINY WAIST - ADDISSON, BUSTY SENSATION HARDCORE DEBUT !

//$('#boutonChangerImage').click(function () {
 //   $('#flashID').attr("src","img/Flash2.png");
 //});

$("#boutonChangerImage").click(function() {
    if ($('#flashID').attr("src") === "img/Flash1.png")
        $('#flashID').attr("src", "img/Flash2.png");
    else if ($('#flashID').attr("src") === "img/Flash2.png")
        $('#flashID').attr("src", "img/Flash1.png");
});

$("#boutonEnleverImage").click(function() {
    $('#flashID').toggle();
});

$("#boutonAjouterImage").click(function() {

});