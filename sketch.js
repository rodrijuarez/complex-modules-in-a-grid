let tileCountX = 6;
let tileCountY = 6;
let count = 0;

let drawMode = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  smooth();
  stroke(0);
  noFill();
  background(360);

  count = mouseX / 20 + 5;
  let para = mouseY / height - 0.5;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {
      let tileWidth = width / tileCountX;
      let tileHeight = height / tileCountY;
      let posX = tileWidth * gridX + tileWidth / 2;
      let posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX, posY);

      // switch between modules
      switch (drawMode) {
        case 1:
          firstModeDraw(tileWidth, tileHeight, count, para);
          break;
        case 2:
          secondModeDraw(tileWidth, tileHeight, count, para);
          break;
        case 3:
          thirdModeDraw(tileWidth, tileHeight, count, para);
          break;
      }

      pop();
    }
  }
}

function firstModeDraw(tileWidth, tileHeight, count, para) {
  translate(-tileWidth / 2, -tileHeight / 2);
  for (let i = 0; i < count; i++) {
    line(0, (para + 0.5) * tileHeight, tileWidth, i * tileHeight / count);
    line(
      0,
      i * tileHeight / count,
      tileWidth,
      tileHeight - (para + 0.5) * tileHeight,
    );
  }
}

function secondModeDraw(tileWidth, tileHeight, count, para) {
  for (let i = 0; i <= count; i++) {
    const x1 = para * tileWidth,
      y1 = para * tileHeight;

    const offset = i / count - 0.5;

    line(x1, y1, tileWidth / 2, offset * tileHeight);
    line(x1, y1, -tileWidth / 2, offset * tileHeight);
    line(x1, y1, offset * tileWidth, tileHeight / 2);
    line(x1, y1, offset * tileWidth, -tileHeight / 2);
  }
}

function thirdModeDraw(tileWidth, tileHeight, count, para) {
  for (let i = 0; i <= count; i++) {
    const x1 = 0,
      y1 = para * tileHeight,
      offset = i / count - 0.5;

    line(x1, y1, tileWidth / 2, offset * tileHeight);
    line(x1, y1, -tileWidth / 2, offset * tileHeight);
    line(x1, y1, offset * tileWidth, tileHeight / 2);
    line(x1, y1, offset * tileWidth, -tileHeight / 2);
  }
}

function keyReleased() {
  if (key == '1') drawMode = 1;
  if (key == '2') drawMode = 2;
  if (key == '3') drawMode = 3;

  if (key == 'a' || key == 'A') tileCountY = max(tileCountY - 1, 1);
  if (key == 's' || key == 'S') tileCountY += 1;
  if (key == 'd' || key == 'D') tileCountX = max(tileCountX - 1, 1);
  if (key == 'f' || key == 'F') tileCountX += 1;
}
