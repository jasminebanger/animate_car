// js code for animate car
$(document).ready(function(){
  //variable
  $surface = $('.surface');
  //keypress events
  $(document).on('keypress',function(e){
                if(e.which == 13){
                    $($surface).toggleClass('moveRight');
                    $($car).toggleClass('suspension');
                }
});
