const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid (options) {
  this.pos = options.pos;
  this.vel = [10, 10];
  this.color = "#000000";
  this.radius = 10;
}

Util.inherits(Asteroid, MovingObject);

// Asteroid.prototype.constructor = MovingObject.prototype.constructor(this.pos, this.vel, "black", 10);

module.exports = Asteroid;
