




  $("#barra").click(function(){
    $(".central").hide(0);
  });

  $("#barra").click(function(){
    $(".central2").hide(0);
  });

  $("#barra").click(function(){
    $(".arriba").hide(0);
  });

  $("#barra").click(function(){
    $(".Copyright").hide(0);
  });


  $(".botonx").click(function(){
    $(".central").show(0);
  });


  $(".botonx").click(function(){
    $(".central2").show(0);
  });

  $(".botonx").click(function(){
    $(".arriba").show(0);
  });

  $(".botonx").click(function(){
    $(".Copyright").show(0);
  });


  
  $('#barra').click(function(e) {
    
    if( $('.esconder').css('visibility') != 'visible' ) {
      $('.esconder').css('visibility', 'visible');
    } else {
      $('.esconder').css('visibility', 'visible');
    }
  });

  
  $('#barra').click(function(e) {
    
    if( $('.central').css('visibility') != 'hidden' ) {
      $('.central').css('visibility', 'hidden');
    } else {
      $('.central').css('visibility', 'hidden');
    }
  });

  $('#barra').click(function(e) {
    
    if( $('.central2').css('visibility') != 'hidden' ) {
      $('.central2').css('visibility', 'hidden');
    } else {
      $('.central2').css('visibility', 'hidden');
    }
  });

  $('.botonx').click(function(e) {
    
    if( $('.esconder').css('visibility') != 'visible' ) {
      $('.esconder').css('visibility', 'hidden');
    } else {
      $('.esconder').css('visibility', 'hidden');
    }
  });

  
  $('.botonx').click(function(e) {
    
    if( $('.central').css('visibility') != 'hidden' ) {
      $('.central').css('visibility', 'hidden');
    } else {
      $('.central').css('visibility', 'visible');
    }
  });

  $('.botonx').click(function(e) {
    
    if( $('.central2').css('visibility') != 'hidden' ) {
      $('.central2').css('visibility', 'hidden');
    } else {
      $('.central2').css('visibility', 'visible');
    }
  });


