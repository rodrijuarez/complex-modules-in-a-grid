const tileCountX = 10;
const tileCountY = 10;
let tileWidth, tileHeight;

let count = 0;
let colorStep = 15;
let circleCount;
let endSize, endOffset;

let actRandomSeed = 0;

function setup() {
  createCanvas(800, 800);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
}

function draw() {
  noFill();
  stroke(0, 128);
  background(255);
  randomSeed(actRandomSeed);

  translate(width / tileCountX / 2, height / tileCountY / 2);

  circleCount = mouseX / 30 + 1;
  endSize = map(mouseX, 0, width, tileWidth / 2.0, 0);
  endOffset = map(mouseY, 0, height, 0, (tileWidth - endSize) / 2);

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {
      push();

      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      const toggle = round(random(0, 5));

      switch (toggle) {
        case 1:
          rotate(-HALF_PI);
          break;
        case 2:
          rotate(0);
          break;
        case 3:
          rotate(HALF_PI);
          break;
        default:
          rotate(PI);
          break;
      }

      for (let i = 0; i < circleCount; i++) {
        const diameter = map(i, 0, circleCount - 1, tileWidth, endSize);
        const offset = map(i, 0, circleCount - 1, 0, endOffset);
        ellipse(offset, 0, diameter, diameter);
      }

      pop();
    }
  }
}
