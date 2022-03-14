let sins = [{
  name: "pride",
  color: "purple"
}, {
  name: "wrath",
  color: "red"
} {
  name: "gluttony",
  color: "orange"
} {
  name: "envy",
  color: "green"
} {
  name: "lust",
  color: "red"
} {
  name: "greed",
  color: "yellow"
} {
  name: "sloth",
  color: "blue"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(200);

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  text(sins[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);

}
