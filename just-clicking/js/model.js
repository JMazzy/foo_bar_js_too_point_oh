// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function(_) {

  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  var score = 0;

  function getScore() {
    return score;
  };

  function getSquares() {
    return _dataSquares;
  };

  function activateRandomSquare() {
    
  };

  function processSquareClick(index) {

  };




  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick,
  }
})(_);
