describe('Bowling', function() {
  var bowling;

  describe('count', function() {
    it('displays scores as zero at the start', function() {
      bowling = new Bowling();
      expect(scoreTotal()).toBe(0);
    });
  });
});
