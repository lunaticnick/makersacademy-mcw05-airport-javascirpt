describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    weather = function(){}
    weather.prototype.isStormy = function(){ return false};
    airport = new Airport(DEFAULT_CAPACITY, weather);
    plane = new Plane();

  });

  describe("creation", function() {
    it('has the DEFAULT capacity', function() {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

    it('has no planes', function() {
      expect(airport.storedplanes.length).toEqual(0);
    });
  });

  describe('when docking a plane', function() {
    it('instructs the plane to land', function() {
      spyOn(plane, 'land')
      plane.takeoff();
      airport.dockPlane(plane)
      expect(plane.land).toHaveBeenCalled();
    });

    it('changes plane\'s flight status', function() {
      plane.takeoff();
      airport.dockPlane(plane);
      expect(plane.isFlying).toBe(false)
    });

    it('adds to storedplanes', function() {
      plane.takeoff();
      airport.dockPlane(plane);
      expect(airport.storedplanes.length).toEqual(1);
    });

    it('does not allow plane to land if full', function() {
      plane.takeoff();
      for (var i=1; i <= DEFAULT_CAPACITY; i++) {
        airport.dockPlane(plane);
        plane.isFlying = true;};
        expect(function() { airport.dockPlane(plane) }).toThrowError("Airport is full!");
    });

    it('does not allow plane to land if weather is stormy', function () {
      spyOn(airport.weather,'isStormy').and.returnValue(true)
      plane.isFlying = true
      expect( function () { airport.dockPlane(plane) }).toThrowError("Cannot Land due to weather")
    });

  });

  describe('when launching a plane', function() {
    it('instructs the plane to take-off', function() {
      spyOn(plane, 'takeoff');
      plane.isFlying = true;
      airport.dockPlane(plane);
      airport.launchPlane(plane);
      expect(plane.takeoff).toHaveBeenCalled();
    });

    it('changes the plane\'s flight status', function() {
      plane.isFlying = true
      airport.dockPlane(plane)
      airport.launchPlane(plane)
      expect(plane.isFlying).toBe(true)
    });

    it(', removes the plane from storedplanes', function() {
      plane.isFlying = true
      airport.dockPlane(plane)
      airport.launchPlane(plane);
      expect(airport.storedplanes.length).toEqual(0);
    });

    it('does not allow plane to take off if empty', function() {
      expect(function() { airport.launchPlane(plane) }).toThrowError("Airport is empty!");
    });

    it('does not allow plane to takeoff if weather is stormy', function () {
      plane.isFlying = true
      airport.dockPlane(plane)
      spyOn(airport.weather,'isStormy').and.returnValue(true)
      expect( function () { airport.launchPlane(plane) }).toThrowError("Cannot Take off due to weather")
    });

  });

  });
