function Bowling() {
  this.scoreTotal = 0;
  this.frameScores = [];
  this.rollArray = [];
  this.rollCount = 0;
};

Bowling.prototype.fillFrameScores = function() {
  if (this.rollCount % 2 == 0) {
    var frameScore = (this.rollArray[this.rollCount-2]) +  (this.rollArray[this.rollCount-1]);
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

Bowling.prototype.roll = function(num) {
  this.rollCount ++;
  if (this.rollArray[(this.rollCount-2)] != 10) {
    this.rollArray.push(num);
  } else {
    this.rollArray.push(0);
  };
  this.fillFrameScores();
};
