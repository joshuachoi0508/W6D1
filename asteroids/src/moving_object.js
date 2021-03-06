function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  let new_pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = new_pos;
  return new_pos;
};

module.exports = MovingObject;
