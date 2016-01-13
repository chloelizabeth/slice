$(function() {


 var a = 10;
    $('.collage1,.collage2,.collage3,.collage4,.collage5,.collage6,.collage7,.collage8,.collage9,.collage10,.collage11').draggable({
   start: function(event, ui) { $(this).css("z-index", a++); }
});
    $('#containment-wrapper').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);


    });



 $('.draggable').draggable({

 });

  $('.resizable').resizable({
      aspectRatio: true,
      handles: 'ne, se, sw, nw',
      autoHide: true


  });
   



$('.draggable').draggable({ containment: "parent", scroll: false });

 $( ".resizable" ).resizable({
      containment: "parent", scroll: false
    });





  //$('.resizable').parent().rotatable();

});