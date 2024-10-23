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
  triangle(572, 343, 617, 335, 567, 316);//1
  
  fill(0, 255, 0);
  noStroke();
  triangle(567, 316, 609, 273, 617, 335);//2
  
  fill(0, 0, 250);
  noStroke();
  triangle(567, 316, 609, 273, 548, 254);//3

  fill(250, 0, 250);
  noStroke();
  triangle(591, 209, 609, 273, 548, 254);//4
  
  fill(0, 0, 250);
  noStroke();
  triangle(591, 209, 609, 273, 654, 230);//5
  
  fill(0, 250, 250);
  noStroke();
  triangle(673, 308, 609, 273, 654, 230);//6
  
  fill(250, 250, 0);
  noStroke();
  triangle(673, 308, 609, 273, 617, 334);//7
  
  fill(250, 0, 0);
  noStroke();
  triangle(591, 209, 654, 230, 676, 163);//8
  
  fill(0, 250, 0);
  noStroke();
  triangle(591, 209, 584, 149, 676, 163);//9
  
  fill(0, 0, 250);
  noStroke();
  triangle(671, 119, 584, 149, 676, 163);//10
  
  fill(0, 250, 250);
  noStroke();
  triangle(671, 119, 738, 125, 676, 163);//11
  
  fill(250, 250, 0);
  noStroke();
  triangle(757, 229, 738, 125, 676, 163);//12
  
  fill(250, 0, 250);
  noStroke();
  triangle(757, 229, 654, 230, 676, 163);//13
  
  fill(0, 0, 250);
  noStroke();
  triangle(757, 229, 738, 125, 825, 213);//14
  
  fill(0, 0, 250);
  noStroke();
  triangle(755, 269, 654, 230, 757, 229);//15
  
  fill(0, 250, 250);
  noStroke();
  triangle(755, 269, 654, 230, 697, 271);//16
  
  fill(250, 0, 250);
  noStroke();
  triangle(757, 229, 818, 265, 825, 213);//17
  
  fill(0, 250, 250);
  noStroke();
  triangle(757, 229, 818, 265, 755, 269);//18
  
  fill(250, 0, 0);
  noStroke();
  triangle(697, 271, 785, 327, 755, 269);//19
  
  fill(250, 250, 0);
  noStroke();
  triangle(697, 271, 785, 327, 706, 334);//20
  
  fill(250, 250, 0);
  noStroke();
  triangle(818, 265, 785, 327, 755, 269);//21
  
  fill(0, 250, 0);
  noStroke();
  triangle(818, 265, 785, 327, 847, 319);//22
  
  fill(0, 0, 250);
  noStroke();
  triangle(752, 378, 785, 327, 706, 334);//23
  
  fill(250, 0, 250);
  noStroke();
  triangle(673, 307, 706, 334, 644, 360);//24
  
  fill(250, 0, 0);
  noStroke();
  triangle(674, 309, 654, 230, 698, 272);
  triangle(673, 309, 697, 271, 706, 334);//25

}
