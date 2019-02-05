//  The Prototype design pattern relies on the JavaScript prototypical inheritance.
//  The prototype model is used mainly for creating objects in performance-intensive situations.

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}

var car = new TeslaModelS();
car.go();
car.stop();