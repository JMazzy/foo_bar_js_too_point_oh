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

    initSquareGrid();
  };

  function initSquareGrid() {
    $squares = $('.square');
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

  function addSquare() {
    var $newSquare = $("<div class='square col-xs-4'></div>");
    $game.append($newSquare)

    initSquareGrid();
  };


  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
  }

})($);
