describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('bowling', function() {
    it('displays scores as zero at the start', function() {
      expect(bowling.scoreTotal).toBe(0);
    });
  });

  describe('count', function() {
    it('stores the number of fallen pins in a roll', function() {
      bowling.roll(6);
      expect(bowling.rollArray[0]).toBe(6);
    });
  });

  describe('frameScores', function() {
    it('adds up the number of fallen pins in two rolls', function() {
      bowling.roll(6);
      bowling.roll(3);
      expect(bowling.frameScores[0]).toBe(9);
    });
  });

  describe('rolling', function() {
    it('does not allow rolls over maximum possible pins', function() {
      bowling.roll(8);
      bowling.roll(6);
      expect(bowling.rollArray.length).toBe(1);
    });
  });
});
