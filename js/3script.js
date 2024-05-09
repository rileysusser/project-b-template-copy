let study;
let prevX, prevY;
let drawing = false;
let lastX = 0;
let lastY = 0;

function preload(){
  study =  loadImage("assets/study.jpg");
}

function setup() {
  let canvas = createCanvas(1200, 900);
  canvas.parent("canvasContainer3");
  
}

function draw() {
  imageMode(CENTER);
  tint(125, 100);
  image(study, 850, 450, width, height);

  push();
  translate(125,0);
rectMode(CENTER);
noStroke();
fill( 243, 230, 135,150);
rect(600,750,100,50,10); // start
rect(width/2, 95, 400,115,10); // title box
rect(width/2, 450, 600,475,10); // main text
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
text('Use the mouse to mimic the stress of students and try to successfully draw.', width/2, 300,575,350);
textSize(40);
textStyle(BOLD);
text('STUDY ZONE',600,95);

fill(250);
noStroke();
rectMode(CENTER);
rect(width/2,515,275,320,10);


pop();



stroke(0);
strokeWeight(2);
if (mouseIsPressed) {
  line(pmouseX, pmouseY, mouseX, mouseY);
}

}
function mousePressed(){
  if (mouseX >= 675 && mouseX <= 775 && mouseY>=725 && mouseY<=775){
    window.location.href = "2index.html";
  }

}