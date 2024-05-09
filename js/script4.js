let gym;
let prevX, prevY;
let drawing = false;
let lastX = 0;
let lastY = 0;
let water;
let y = 620;



function preload(){
  gym =  loadImage("assets/gym.jpg");
  water =  loadImage("assets/water.jpg");

}

function setup() {
  let canvas = createCanvas(1200, 900);
  canvas.parent("canvasContainer4");
}

function draw() {
  imageMode(CENTER);
  tint(125, 100);
  image(gym, 850, 450, width, height);

  push();
  translate(125,0);
rectMode(CENTER);
noStroke();
fill( 243, 230, 135,150);
rect(600,750,100,50,10); // start
rect(width/2, 95, 400,115,10); // title box
rect(width/2, 300, 600,237.5,10); // main text
textSize(30);
fill(14,24,77);
textFont('Courier New');
textAlign(CENTER, CENTER);
push();
if (mouseX >= 675 && mouseX <= 775 && mouseY>=725 && mouseY<=775){
  textStyle(BOLD);
}else{
  textStyle(NORMAL);
}
text('Back', 600, 750);
pop();
textStyle(NORMAL);
text('Use the mouse fill up the students water bottle for their basketball tryout.', width/2, 300,575,350);
textSize(40);
textStyle(BOLD);
text('ATHLETIC ZONE',600,95);

noTint();
image(water,600,570,100,200);
pop();

line((width / 2 - 50)+100, y, (width / 2 + 50)+100, y);
  
  if (mouseIsPressed) {
    y -= 1;
    y = max(y, 0);

}

if (y<=500){
  textSize(60);
  text('SUCCESS!',600,570);
}

}
function mousePressed(){
  if (mouseX >= 675 && mouseX <= 775 && mouseY>=725 && mouseY<=775){
    window.location.href = "index2.html";
  }
}