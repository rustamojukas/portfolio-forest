(function() {
  'use strict';
  //.login-button
  $(".login-button").on( "click", function() {
    console.log( "Click" );
    $('.welcome__user-card-wrapper').addClass('flipped');
    $('.login-button').hide();
  });
  $(".home").on( "click", function() {
    console.log( "Click" );
    $('.welcome__user-card-wrapper').removeClass('flipped');
    $('.login-button').show();
  });
})();
