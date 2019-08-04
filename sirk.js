class Sirk {
  constructor() {
    this.radius = 1;
    this.noisy = 200;
    this.phase = 0.0;
    this.zoff = 0.0;
  }
  update() {
    this.phase += 0.001;
    // this.col = random(255);
  }
  show(c) {
    colorMode(HSB);
    stroke(0);
    fill(c, 255, 255);
    strokeWeight(6);
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {

      let xoff = cos(a + this.phase) + 1;
      let yoff = sin(a + this.phase) + 1;
      let n = map(noise(xoff, yoff, this.zoff), 0, 1, -this.noisy, this.noisy);
      let r = this.radius + n;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}