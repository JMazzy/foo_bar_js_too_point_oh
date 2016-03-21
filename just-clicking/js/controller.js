// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {

  function init() {
    setInterval(function() {
      var indexes = _.times(_dataSquares.length, function(index) {
        return index;
      });
      indexes = _.shuffle(indexes);

      for (var i = 0; i < indexes.length; i++) {
        var index = indexes[i];
        var $square = $squares.eq(index);
        var dataSquare = _dataSquares[index];
        if (dataSquare === 0) {
          $square.addClass('active');
          _dataSquares[index] = 1;
          break;
        }
      }
    }, 1000);

    var onClick = function(){
      $game.click('.square', function(e) {
        var $square = $(e.target);
        if ($square.hasClass('active')) {
          $square.removeClass('active');
          var index = parseInt($square.attr('data-id'));
          _dataSquares[index] = 0;
          var score = $score.text();
          score = parseInt(score);
          $score.text(score + 10);
        }
      });
    }
    
    view.init(onClick);
  };


  return {
    init: init,
  }

})( JC.model, JC.view );
