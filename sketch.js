let sins = ['sloth', 'greed', 'lust', 'gluttony', 'envy', 'pride', 'wrath'];

let mr;
let gr;
let br;
let sr;

let rc = 20;
let gc = 100;
let bc = 250;

let wrds;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);
  intText();
  fortBall();
  console.log(sins[int(random(sins.length))]);


}

function draw() {
}

function mousePressed() {
  mr = int(random(sins.length));
  wrds = sins[mr];
  rc = random(255);
  gc = random(255);
  bc = random(255);
  fortText();
  console.log(wrds);
}

function fortBall() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 100);
}

function fortRect() {
  fill(rc, gc, bc);
  rect(width*0.5,height*0.5, 100);
}

function fortBall2() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 50, 150);
}

function intText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('Click the circle to see your sin.', width*0.5, height*0.3);
}

function fortText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(CENTER);
  text('You are the sin of', width*0.5, height*0.7);
  text(wrds, width*0.5, height*0.75)
}
