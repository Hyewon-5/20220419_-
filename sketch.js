let img;

function setup() {
  img = loadImage("pearl.png");
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, 1280, 720);
}
