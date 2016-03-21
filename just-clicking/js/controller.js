// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {

  function init() {
    setInterval(function() {
      model.activateRandomSquare();
      view.updateSquares( model.getSquares() );
      view.updateScore( model.getScore() );
    }, 1000);

    function onClick(index) {
      model.processSquareClick(index);
      view.updateSquares( model.getSquares() );
      view.updateScore( model.getScore() );
    }

    view.init(onClick);
  };

  return {
    init: init,
  }

})( JC.model, JC.view );
