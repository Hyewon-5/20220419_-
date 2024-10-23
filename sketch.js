let img;

function setup() {
  img = loadImage("pearl.png");
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, 1280, 720);
  if (mouseIsPressed === true) {
    console.log(mouseX, mouseY);
  }

  fill(255, 0, 0);
  noStroke();
  triangle(572, 343, 617, 335, 567, 316);
}
