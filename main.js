


$( document ).ready(function() {

$(".floating-menu").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement('#top')) { //if it has scrolled beyond the #content elment
            $('.floating-menu').show();  //Show the navigation bar
        } else {
            $('.floating-menu').hide(); //Else hide it
        }

    });



var myList = [ "Websites", "Buisness Solutions", "Graphics", "Marketing Plans", "Events", "Lean Start-Ups","Corporate Culture", "Training Materials", "For YOU!" ];

var delay=1000;

$.each(myList,function(listNo,listValue){
setTimeout (function(){

$('#textholder').html(listValue);

}, delay );
delay+=1000

});


});
