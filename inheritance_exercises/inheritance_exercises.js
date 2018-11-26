//build inherits function using surrogate methods

// Function.prototype.inherits = function(parent) {
//   function Surrogate (){}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
//
// function MovingObject (position, speed) {
//   this.position = position;
//   this.speed = speed;
// }
//
// MovingObject.prototype.doubleSpeed = function() {
//   return this.speed * 2;
// };
//
// function Ship (position, speed) {
//   MovingObject.call(this, position, speed);
// }
//
// Ship.prototype.tripleSpeed = function() {
//   return this.speed * 3;
// };
//
// Ship.inherits(MovingObject);
//
// function Asteroid (position, speed) {
//   MovingObject.call(this, position, speed);
// }
//
// Asteroid.inherits(MovingObject);

//
// const s = new Ship(3, 10);
// const a = new Asteroid(4, 7);
// const m = new MovingObject(1, 2);
// console.log(s.speed);
// console.log(s.doubleSpeed());
// console.log(a.speed);
// console.log(a.tripleSpeed());
// console.log(m.speed);
// console.log(m.tripleSpeed());







 
//build inherits function using ES5 methods

// Function.prototype.inherits = function(parent) {
//   this.prototype = Object.create(parent.prototype);
//   this.prototype.constructor = this;
// };
//
// function MovingObject (position, speed) {
//   this.position = position;
//   this.speed = speed;
// }
//
// MovingObject.prototype.doubleSpeed = function() {
//   return this.speed * 2;
// };
//
// function Ship (position, speed) {
//   MovingObject.call(this, position, speed);
// }
//
// Ship.prototype.tripleSpeed = function() {
//   return this.speed * 3;
// };
//
// Ship.inherits(MovingObject);
//
// function Asteroid (position, speed) {
//   MovingObject.call(this, position, speed);
// }
//
// Asteroid.inherits(MovingObject);
//
//
// const s = new Ship(3, 10);
// const a = new Asteroid(4, 7);
// const m = new MovingObject(1, 2);
// console.log(s.speed);
// console.log(s.doubleSpeed());
// console.log(a.speed);
// console.log(a.tripleSpeed());
// console.log(m.speed);
// console.log(m.tripleSpeed());





//build inherits function using ES6 methods

class MovingObject {
  constructor(position, speed) {
    this.position = position;
    this.speed = speed;
  }

  doubleSpeed(){
    console.log(2 * this.speed);
  }
}

class Ship extends MovingObject {
  constructor(position, speed) {
    super(position, speed);
  }

  tripleSpeed(){
    console.log(3 * this.speed);
  }
}

class Asteroid extends MovingObject {
  constructor(position, speed){
    super(position, speed);
  }
}

// const s = new Ship(3, 10);
// const a = new Asteroid(4, 7);
// const m = new MovingObject(1, 2);
// console.log(s.speed);
// console.log(s.doubleSpeed());
// console.log(a.speed);
// console.log(a.tripleSpeed());
// console.log(m.speed);
// console.log(m.tripleSpeed());
