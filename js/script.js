$(function(){
    let slideI = 0;
    setInterval(function(){
      console.log(slideI);
      if(slideI<2){
        slideI++;
      }else{
        slideI=0;
      }
      $('.main_visual ul.slider').animate({
        left: slideI*(-100)+'%',
      },500);
    },3000);

});