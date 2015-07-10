function Bowling() {
  this.scoreTotal = 0;
  this.rollArray = [];
};

// Bowling.prototype.roll = function() {
//   var x = Math.floor((Math.random() * 11));
//   this.scoreTotal +=x;
// };

Bowling.prototype.roll = function(num) {
  this.rollArray.push(num);
};
