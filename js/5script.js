let quad;
let sakura;
let prevX, prevY;
let drawing = false;
let lastX = 0;
let lastY = 0;
let clicks = [];

function preload(){
  quad =  loadImage("assets/quad.jpg");
  sakura =  loadImage("assets/sakura.gif");

}

function setup() {
  let canvas = createCanvas(1200, 900);
  canvas.parent("canvasContainer5");
}

function draw() {
  imageMode(CENTER);
  tint(125, 100);
  image(quad, 850, 450, width, height);

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
text('Use the mouse to add life to the campus quad for the spring season.', width/2, 300,575,350);
textSize(40);
textStyle(BOLD);
text('CHILL ZONE',600,95);


image(sakura,600,580);

for (let i = 0; i < clicks.length; i++) {
  image(sakura, clicks[i].x, clicks[i].y);
}


pop();

}

function mousePressed(){
  clicks.push({x: mouseX, y: mouseY});
  if (mouseX >= 675 && mouseX <= 775 && mouseY>=725 && mouseY<=775){
    window.location.href = "2index.html";
  }
  
  }