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
});
