console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function(event) {
  const c = document.getElementById("game-canvas");
  const ctx = c.getContext("2d");
  window.ctx = ctx;
});

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
