let alipay;
let redbull;
let starbucks;
let ufcc;
let oolong;
let coke;
let x;
x = 327
let y;
let xSpeed;
xSpeed = .2;

let x2;
x2 = 359;
let xSpeed2;
xSpeed2 = .2;

let x3;
x3 = 385;
let xSpeed3;
xSpeed3 = .2;

let x4;
x4 = 410;
let xSpeed4;
xSpeed4 = .2;

let x5;
x5 = 440;
let xSpeed5;
xSpeed5 = .2;

let r;
let g;
let b;
r = 243;
g = 230;
b = 135;


let water;
let clementine;
let bar;
let yogurt;
let apple;

let noodles;
let cheetos;
let pejoy;
let cookies;
let lays;


function preload(){
  alipay =  loadImage("assets/alipay.jpg");
  redbull = loadImage("assets/redbull.jpg");
  starbucks = loadImage("assets/starbucks.jpg");
  ufcc = loadImage("assets/ufcc.jpg");
  oolong = loadImage("assets/oolong.jpg");
  coke = loadImage("assets/coke.jpg");

  water = loadImage("assets/water.jpg");
  clementine = loadImage("assets/clementine.jpg");
  bar = loadImage("assets/bar.jpg");
  yogurt = loadImage("assets/yogurt.jpg");
  apple = loadImage("assets/apple.jpg");

  noodles = loadImage("assets/noodles.jpg");
  cheetos = loadImage("assets/cheetos.jpg");
  pejoy = loadImage("assets/pejoy.jpg");
  cookies = loadImage("assets/cookies.jpg");
  lays = loadImage("assets/lays.jpg");

}
function setup() {
  let canvas = createCanvas(1200, 900);
  canvas.parent("canvasContainer2");
}

function draw() {
  push();
  scale(1.5);
  imageMode(CENTER);
  push();
  translate(200,100);
  stroke(200);
  rectMode(CENTER);
  fill(14,24,77,150);
  rect(95,180,10,25,10,0,0,10)
  fill(14,24,77); //blue
  rect(200,200,200,350,10);
  fill(243, 230, 135); //yellow
  
  for(let y = 120; y <= 360; y+=100){
    rect(200,y,200,10);
  }
 pop();
  noStroke();
  rectMode(CENTER);
  if (mouseX >= 455 && mouseX <= 745 && mouseY>=195 && mouseY<=315){
    fill(r,g,b,200);
  }else{fill(r,g,b)};
  rect(400,170,180,80,10); // energy drink background pannel

  if (mouseX >= 455 && mouseX <= 745 && mouseY>=345 && mouseY<=465){
    fill(243,230,135,200);
  }else{fill(243,230,135)};
  rect(400,270,180,80,10); // 2 background pannel

  if (mouseX >= 455 && mouseX <= 745 && mouseY>=495 && mouseY<=605){
    fill(243,230,135,200);
  }else{fill(243,230,135)};
  rect(400,370,180,80,10) ;// 3 background pannel

  fill(r,g,b);
  rect(400,450,60,25,20); // home rect
  textAlign(CENTER, CENTER);
  fill(14,24,77);
  textSize(15);
  textFont('Courier New');
  if (mouseX >= 555 && mouseX <= 645 && mouseY>=660 && mouseY<=680){
    textStyle(BOLD);
  }else{
    textStyle(NORMAL);
  }

  text('Home',400,450);
 
  image(alipay, 475,247,20,20);

  if (x > 470) {
    x = 325;
  } else {
    x += xSpeed;
  }
  image(redbull, x, 190, 35, 40);


  if (x2 > 470) {
    x2 = 325;
  } else {
    x2 += xSpeed2;
  }
  image(coke, x2, 190, 18, 36);


  if (x3 > 470) {
    x3 = 325;
  } else {
    x3 += xSpeed3;
  }
  image(oolong, x3, 190, 20, 40);

  if (x4 > 470) {
    x4 = 325;
  } else {
    x4 += xSpeed4;
  }
  image(ufcc, x4, 190, 20, 40);


  if (x5 > 470) {
    x5 = 325;
  } else {
    x5 += xSpeed5;
  }
  image(starbucks, x5, 190, 20, 40);
// *** row 1 ***



if (x > 470) {
  x = 325;
} else {
  x += xSpeed;
}
image(water, x, 290, 35, 40);


if (x2 > 470) {
  x2 = 325;
} else {
  x2 += xSpeed2;
}
image(clementine, x2, 290, 18, 36);


if (x3 > 470) {
  x3 = 325;
} else {
  x3 += xSpeed3;
}
image(bar, x3, 290, 20, 40);

if (x4 > 470) {
  x4 = 325;
} else {
  x4 += xSpeed4;
}
image(yogurt, x4, 290, 20, 40);

if (x5 > 470) {
  x5 = 325;
} else {
  x5 += xSpeed5;
}
image(apple, x5, 290, 20, 40);


//row 2



if (x > 470) {
  x = 325;
} else {
  x += xSpeed;
}
image(cheetos, x, 390, 30, 35);


if (x2 > 470) {
  x2 = 325;
} else {
  x2 += xSpeed2;
}
image(noodles, x2, 390, 37, 37);


if (x3 > 470) {
  x3 = 325;
} else {
  x3 += xSpeed3;
}
image(pejoy, x3, 390, 20, 40);

if (x4 > 470) {
  x4 = 325;
} else {
  x4 += xSpeed4;
}
image(cookies, x4, 390, 20, 40);

if (x5 > 470) {
  x5 = 325;
} else {
  x5 += xSpeed5;
}
image(lays, x5, 390, 20, 40);





  pop();


 }
 function mousePressed(){
  if (mouseX >= 455 && mouseX <= 745 && mouseY>=210 && mouseY<=290){
    window.location.href = "3index.html";
  }


  if (mouseX >= 455 && mouseX <= 745 && mouseY>=390 && mouseY<=490){
    window.location.href = "4index.html";
  }


  if (mouseX >= 455 && mouseX <= 745 && mouseY>=510 && mouseY<=590){
    window.location.href = "5index.html";
  }


  if (mouseX >= 555 && mouseX <= 645 && mouseY>=660 && mouseY<=680){
    window.location.href = "1index.html";
  }
}