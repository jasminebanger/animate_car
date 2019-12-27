// js code for animate car
$(document).ready(function(){
  //variable
  $surface = $('.surface');
  $car = $('.car');
  $img = $('.carimg');
  let flag = true;
  const cars = ['assets/Img_05.png','assets/Img_06.png'];
  
  //keypress events
  $(document).on('keypress',function(e){
                if(e.which == 13){
                    $($surface).toggleClass('moveRight');
                    $($car).toggleClass('suspension');
                }
    
    $(document).on('keypress',function(e){
      if(e.which == 13){
                        if(flag){
                            flag = false;
                            $img.attr('src', cars[0]);
                        }
                        else{
                            flag = true;
                            $img.attr('src', cars[1]);
                        }
      }
    });
});
