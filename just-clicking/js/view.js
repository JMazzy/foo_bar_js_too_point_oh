// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function($) {

  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');

  function init(onClick) {
    $game.click('.square', function(e) {
      var $t = $(e.target);
      var id = $t.data('id');
      onClick( id );
    });

    $squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });
  };

  function updateSquares(dataSquares) {
    $squares.each(function(index, element) {
      var $square = $squares.eq(index);
      var dataSquare = dataSquares[index];
      if ( dataSquare === 1 ) {
        $square.addClass('active');
      } else {
        $square.removeClass('active');
      }
    });
  };

  function updateScore(points) {
    $score.text(points);
  };


  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
  }

})($);
