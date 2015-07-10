function Bowling() {
  this.scoreTotal = 0;
  this.frameScores = [];
  this.rollArray = [];
  this.rollCount = 0;
  this.frameCount = 0;
};

Bowling.prototype.fillFrameScores = function() {
  var lastScore = this.rollArray[this.rollCount-2]
  var secondLastScore = this.rollArray[this.rollCount-1]
  if (this.rollCount % 2 == 0) {
    var frameScore = (lastScore + secondLastScore); 
    this.frameScores.push(frameScore);
    this.addBonus();
  };
};

Bowling.prototype.addBonus = function() {
  if (this.rollArray[this.rollCount-4] == 10) {
    this.frameScores[(this.frameScores.length-2)] += this.frameScores[(this.frameScores.length-1)];
  } else if ((this.rollArray[this.rollCount-4]) + (this.rollArray[this.rollCount-3]) == 10) {
    this.frameScores[(this.frameScores.length-2)] += this.rollArray[this.rollCount-2];
  };
};
//
// Bowling.prototype.checkEnd = function() {
//   if((rollCount == 21) || ((rollCount == 20) && (this.frameScores[9] < 10))) {
//   alert("Game over!");
//   };
// };

Bowling.prototype.roll = function(num) {


  // this.checkEnd;
  this.rollCount ++;

  if (this.rollCount % 2 == 0) {
    this.frameCount ++;
  };

  if (this.rollArray[(this.rollCount-2)] != 10) {
    this.rollArray.push(num);
  } else {
    this.rollArray.push(0);
  };
  this.fillFrameScores();
};
