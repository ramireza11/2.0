let angle = 6.1;
let angleV = 1;
let angleA = 1;
var canvas;

let angleRotate = 0.0;

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(900,160);
  bgcolor = color(0);
  createP ('');
  angleMode(RADIANS);


let holdA = 0;
}

function mousePressed() {
  angle = TWO_PI+ createVector(mouseX-200, mouseY-200).heading();
  holdA = angle + TWO_PI;
  angleV = 30;
}
function mouseDragged() {
  angle = TWO_PI + createVector(mouseX-200, mouseY-200).heading();
}

function mouseReleased() {
  let newAngle = TWO_PI+ createVector(mouseX-200, mouseY-200).heading();
  angleV = -1*(newAngle-holdA) * 0.10;
}

function draw() {
  angleA = map(mouseX, 0, width, -0.01, 0.01);
  angleV = constrain(angleV, -0.2, 0.2);
  background(24,0,0);
  translate(250, 250);


  fill(255, 192, 203);
  textSize(30);
  text('LUST', 25, 150);

  fill(250, 253, 15);
  textSize(30);
  text('GREED', -113, 150);

  fill(255, 131, 0);
  textSize(20);
  text('GLUTTONY', -117, -130);

  fill(66, 105, 47);
  textSize(30);
  text('ENVY', 30, -130);

  fill(0, 0, 255);
  textSize(30);
  text('SLOTH', 80, -35);

  fill(0);
  textSize(15);
  text('NOT A SINNER', 70, 50);

  fill(255, 0, 0);
  textSize(30);
  text('WRATH', -180, 55);

  fill(106, 13, 173);
  textSize(30);
  text('PRIDE', -180, -35);

  fill(0);
  textSize(20);
  text('PRESS THE "PUSH" BUTTON', -130, -220);

  fill(0);
  textSize(20);
  text('TO KNOW WHAT SIN YOU ARE', -140, 230);

  let i = 0;
  for (let a = 0; a < TWO_PI; a += PI / 4) {
    noFill();
    stroke(255);
    strokeWeight(5);
    let ang = angle % TWO_PI;
    if (ang >= a && ang <= a + PI/3) {
      fill(255, 50);
    }
    arc(0, 0, 400, 400, a, a + PI / 4, PIE);
    i++;
  }


  fill(0);
  rectMode(CENTER);
  rotate(angle);
  rect(0, 0, 256, 16);
  triangle(128, -32, 128, 32, 172, 0);
  textFont('Georgia')
  textSize(15)
  fill(0)
  text("push", -15, 4);

  angle += angleV;
  // angleV += angleA;
  angleV *= 0.99;
}
