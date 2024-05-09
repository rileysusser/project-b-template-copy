let campus;

function preload(){
  campus =  loadImage("assets/campus.jpg");
}

function setup() {
  let canvas = createCanvas(1200, 900);
  canvas.parent("canvasContainer");
}

function draw() {
  imageMode(CENTER);
  tint(125, 100);
  image(campus, 600, 450, width, height);

rectMode(CENTER);
noStroke();
fill( 243, 230, 135,150);
rect(600,750,100,50,10); // start
rect(width/2, 150, 900,125,10); // title box
rect(width/2, 475, 600,400,10); // main text
textSize(30);
fill(14,24,77);
textFont('Courier New');
textAlign(CENTER, CENTER);
push();
if (mouseX >= 550 && mouseX <= 650 && mouseY>=725 && mouseY<=775){
  textStyle(BOLD);
}else{
  textStyle(NORMAL);
}
text('start', 600, 750);
pop();
textStyle(NORMAL);
text('Welcome to the year 2024! You have been brought back to the newly opened NYU Shanghai Qiantan campus. Discover what college life was like in 2024 at this international Shanghai-based university through foods. Click below to begin exploring.', width/2, 475,575,350);
textSize(40);
textStyle(BOLD);
text('University Life in the Roaring 20s',600,150);
}

function mousePressed(){
  if (mouseX >= 550 && mouseX <= 650 && mouseY>=725 && mouseY<=775){
    window.location.href = "2index.html";
  }
}