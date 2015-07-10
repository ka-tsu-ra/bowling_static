function Bowling() {
  this.scoreTotal = 0;
  this.frameScores = [];
  this.rollArray = [];
  this.rollCount = 0;
};

Bowling.prototype.fillFrameScores = function() {
  if(this.rollCount % 2 == 0){
    var frameScore = (this.rollArray[this.rollCount-2]) +  (this.rollArray[this.rollCount-1]);
    this.frameScores.push(frameScore);
  };
};

Bowling.prototype.addBonus = function() {
  if(this.frameScores[(this.frameScores.length-2)] == 10) { this.frameScores[(this.frameScores.length-2)] += this.frameScores[(this.frameScores.length-1)];
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
  this.addBonus();
};
