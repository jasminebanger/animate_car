// js code for animate car
$(document).ready(function(){
  $surface = $('.surface');
  $(document).on('keypress',function(e){
                if(e.which == 13){
                    $($surface).toggleClass('moveRight');
});
