


$( document ).ready(function() {
var myList = [ "Websites", "Buisness Solutions", "Graphics", "Marketing Plans", "Events", "Lean Start-Ups","Corporate Culture", "Training Materials", "For YOU!" ];

var delay=1000;

$.each(myList,function(listNo,listValue){
setTimeout (function(){

$('#textholder').html(listValue);

}, delay );
delay+=1000

});
});
