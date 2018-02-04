const DEFAULT_CAPACITY = 10;


 Airport = function(capacity = DEFAULT_CAPACITY, weather = Weather) {
  this.capacity = capacity;
  this.storedplanes = [];
  this.weather = new weather();
  };


Airport.prototype.dockPlane = function(plane){

  if(this.weather.isStormy() === true){
    throw new Error("Cannot Land due to weather");
  }

  if(this.storedplanes.length >= DEFAULT_CAPACITY){
    throw new Error("Airport is full!");
  }
    this.storedplanes.push(plane);
    plane.land();
    console.log("Plane docked")
  };

Airport.prototype.launchPlane = function(plane){
  if(this.weather.isStormy() === true){
    throw new Error("Cannot Take off due to weather");
  }

  if(this.storedplanes.length <=0){
    throw new Error("Airport is empty!");
  }
    this.storedplanes.pop(plane);
    plane.takeoff();
    console.log("Plane launched")
};
