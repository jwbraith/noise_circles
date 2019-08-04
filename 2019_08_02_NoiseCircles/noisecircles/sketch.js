let sirks = [];
let total = 2.0;
let totalC = 1;
let s = 0;
let colOff = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  // noLoop();
  for (let i = 0; i < 50; i++) {

    sirks.push(new Sirk());

  }
}

function draw() {
  background(0);
  if (total >= 12 || total <= 1) {
    totalC *= -1;
  }

  translate(width / 2, height / 2);
  for (let all of sirks) {
    all.zoff += 0.005;
  }
  if (frameCount % 5 === 0) {
    total += totalC;
  }

  for (let i = 0; i < total; i++) {
    let col = map(sin(i * 0.2 + colOff), -1, 1, 0, 255);
    sirks[i].radius = 250 + (i * -15);
    sirks[i].update();
    sirks[i].show(col);
  }
  colOff += 0.005;


}