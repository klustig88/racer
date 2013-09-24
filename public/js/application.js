
$(document).ready(function() {
position1 = 1
position2 = 1
player1 = $('#player1').text();
player2 = $('#player2').text();
var start = $.now();

// $("#player1_strip ." + position + " img").attr('src',"http://i2.minus.com/jeUfdFPTE2O1M_e.jpg"
  $('input').on('keyup', function(e) {
    var code = e.keyCode || e.which;
    if (code === 65 && position1 <= 8) {
    $("#player1_strip ." + (position1 - 1) + " img").attr('src',"http://rlv.zcache.com/black_square_formal_party_or_event_invitation-r2010155778ca4a669b3772131bad7f23_8dnmw_8byvr_50.jpg");
    $("#player1_strip ." + position1 + " img").attr('src',"http://i2.minus.com/jeUfdFPTE2O1M_e.jpg");
    position1 = position1 + 1
    }
    if (code === 76 && position2 <= 8) {
    $("#player2_strip ." + (position2 - 1) + " img").attr('src',"http://rlv.zcache.com/black_square_formal_party_or_event_invitation-r2010155778ca4a669b3772131bad7f23_8dnmw_8byvr_50.jpg");
    $("#player2_strip ." + position2 + " img").attr('src',"http://i2.minus.com/jeUfdFPTE2O1M_e.jpg");
    position2 = position2 + 1
    }
     if (position1 === 9){
      var end = $.now();
      time = ((end-start) / 1000);
      $.post( "/winner", { winner_name: player1, player1: player1, player2: player2, time: time} );
      $('input').keydown(false);
      // alert("Player 1 wins!");
    
     }
     if (position2 === 9){
      var end = $.now();
      time = ((end-start) / 1000);
      $.post( "/winner", { winner_name: player2, player1: player1, player2: player2, time: time} );
      $('input').keydown(false);
      // alert("Player 2 wins!");
     }
      


    console.log(code);
  });
});
