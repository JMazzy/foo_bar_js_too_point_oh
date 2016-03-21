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
    var indexes = _.times(_dataSquares.length, function(index) {
      return index;
    });
    indexes = _.shuffle(indexes);

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var dataSquare = _dataSquares[index];
      if (dataSquare === 0) {
        _dataSquares[index] = 1;
        break;
      }
    }
  };

  function processSquareClick(index) {
    var dataSquare = _dataSquares[index];
    if (dataSquare === 1) {
      _dataSquares[index] = 0;
      score += 10;
    }
  };




  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick,
  }
})(_);
