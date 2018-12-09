$(function () {
   $('#sixth');
   console.log( $('#sixth'));

   console.log($('.newItem'));

   console.log(   $('h2')     );

   console.log(  $('.item:not(#sixth)')  );

   console.log(   $('.item:even')   );

   console.log( $('.item:eq(0)')  );


   /*----------------------------------------------------------------------------*/


    $('#sixth').html('<i>zmieniony html</i>');

    $('.newItem').text('Zmieniony tekst');


    $('.item:first').before('<li class="item">Dodany przed pierwszym</li>');
    $('.item:eq(1)').after('<li class="item">Dodany po drugim</li>')

    $('#sixth').css('font-size','2em');


    $('.textInput').on('focus',function () {
        $(this).css('border', '3px solid lightgray');
    })

});