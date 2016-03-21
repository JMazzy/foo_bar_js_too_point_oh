// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function($) {

  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');

  function init(onClick) {
    onClick();
  };

  function updateSquares(dataSquares) {
    $squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });
  };

  function updateScore(points) {

  };


  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
  }

})($);
