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

  fill(239, 204, 184);
  noStroke();
  triangle(572, 343, 617, 335, 567, 316);//1
  
  fill(237, 209, 205);
  noStroke();
  triangle(567, 316, 609, 273, 617, 335);//2
  
  fill(225, 192, 169);
  noStroke();
  triangle(567, 316, 609, 273, 548, 254);//3

  fill(142, 163, 192);
  noStroke();
  triangle(591, 209, 609, 273, 548, 254);//4
  
  fill(130, 163, 206);
  noStroke();
  triangle(591, 209, 609, 273, 654, 230);//5
  
  fill(62, 117, 156);
  noStroke();
  triangle(673, 308, 609, 273, 654, 230);//6
  
  fill(245, 211, 195);
  noStroke();
  triangle(673, 308, 609, 273, 617, 334);//7
  
  fill(142, 153, 190);
  noStroke();
  triangle(591, 209, 654, 230, 676, 163);//8
  
  fill(165, 174, 203);
  noStroke();
  triangle(591, 209, 584, 149, 676, 163);//9
  
  fill(185, 203, 227);
  noStroke();
  triangle(671, 119, 584, 149, 676, 163);//10
  
  fill(142, 163, 192);
  noStroke();
  triangle(671, 119, 738, 125, 676, 163);//11
  
  fill(160, 184, 218);
  noStroke();
  triangle(757, 229, 738, 125, 676, 163);//12
  
  fill(181, 188, 213);
  noStroke();
  triangle(757, 229, 654, 230, 676, 163);//13
  
  fill(71, 136, 180);
  noStroke();
  triangle(757, 229, 738, 125, 825, 213);//14
  
  fill(117, 140, 174);
  noStroke();
  triangle(755, 269, 654, 230, 757, 229);//15
  
  fill(81, 104, 138);
  noStroke();
  triangle(755, 269, 654, 230, 697, 271);//16
  
  fill(77, 99, 132);
  noStroke();
  triangle(757, 229, 818, 265, 825, 213);//17
  
  fill(71, 136, 180);
  noStroke();
  triangle(757, 229, 818, 265, 755, 269);//18
  
  fill(47, 54, 73);
  noStroke();
  triangle(697, 271, 785, 329, 755, 269);//19
  
  fill(58, 74, 99);
  noStroke();
  triangle(697, 271, 785, 329, 706, 334);//20
  
  fill(58, 74, 99);
  noStroke();
  triangle(818, 265, 785, 329, 755, 269);//21
  
  fill(20, 17, 36);
  noStroke();
  triangle(818, 265, 785, 329, 847, 319);//22
  
  fill(20, 17, 36);
  noStroke();
  triangle(753, 379, 785, 329, 706, 334);//23
  
  fill(174, 144, 120);
  noStroke();
  triangle(673, 307, 706, 334, 644, 360);//24
  
  fill(70, 89, 119);
  noStroke();
  triangle(673, 309, 654, 230, 698, 272);
  triangle(673, 308, 697, 271, 706, 334);//25

}
