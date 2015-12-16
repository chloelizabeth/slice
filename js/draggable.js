$(function() {


 var a = 10;
    $('.collage1,.collage2,.collage3,.collage4,.collage5,.collage6').draggable({
   start: function(event, ui) { $(this).css("z-index", a++); }
});
    $('#containment-wrapper').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);

    });



 $('.draggable').draggable();

  $('.resizable').resizable({
      aspectRatio: true,
      handles: 'ne, se, sw, nw',
      autoHide: true


  });
   



$('.draggable').draggable({ containment: "#containment-wrapper", scroll: false });

 $( ".resizable" ).resizable({
      containment: "#containment-wrapper", scroll: false
    });






  //$('.resizable').parent().rotatable();

});