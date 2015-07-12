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

Bowling.prototype.checkEnd = function() {
  if (this.rollArray[18] + this.rollArray[19] < 10) {
    alert("End of game!");
  } else if ((this.rollArray[18] == 10) && (this.rollArray.length == 22)) {
    alert("End of game!");
  } else if ((this.rollArray[18] + this.rollArray[19] == 10) && (this.rollArray.length == 21)) {
    alert("End of game!");
  }
};

Bowling.prototype.totalScore = function() {
  if (this.frameCount == 10) {
    this.scoreTotal = this.frameScores[0] + this.frameScores[1] + this.frameScores[2] + this.frameScores[3] + this.frameScores[4] + this.frameScores[5] + this.frameScores[6] + this.frameScores[7] + this.frameScores[8] + this.frameScores[9];
  };
};

Bowling.prototype.roll = function(num) {

  this.rollCount ++;

  if (this.rollCount % 2 == 0) {
    this.frameCount ++;
  };

  if (this.frameCount <= 10) {

    if ((this.rollCount % 2 == 0) && (this.rollArray[(this.rollCount-2)] == 10)) {
      this.rollArray.push(0);
    } else {
      this.rollArray.push(num);
    };
  } else {
    this.rollArray.push(num);
  };

  this.fillFrameScores();
  this.totalScore();
  this.checkEnd();
};
