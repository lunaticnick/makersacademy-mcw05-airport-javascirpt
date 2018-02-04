describe('Weather', function() {

  beforeEach(function() {
    weather = new Weather();
  });


  describe("Report", function() {
    it("Returns the weather", function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(weather.isStormy()).toBe(true);
    });
  });
});
