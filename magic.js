// js code for animate car
$(document).ready(function(){
  //variable
  $surface = $('.surface');
  $car = $('.car');
  $img = $('.carimg');
  let flag = true;
  
  //keypress events
  $(document).on('keypress',function(e){
                if(e.which == 13){
                    $($surface).toggleClass('moveRight');
                    $($car).toggleClass('suspension');
                }
    
    $(document).on('keypress',function(e){
      
    });
});
