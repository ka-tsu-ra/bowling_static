function Bowling() {
  this.scoreTotal = 0;
  this.frameScores = [];
  this.rollArray = [];
};

rollCount = 0

Bowling.prototype.roll = function(num) {
  rollCount ++;
  this.rollArray.push(num);
  if(rollCount % 2 == 0){
    var frameScore = (this.rollArray[rollCount-2]) +  (this.rollArray[rollCount-1]);
    this.frameScores.push(frameScore);
  };
};
