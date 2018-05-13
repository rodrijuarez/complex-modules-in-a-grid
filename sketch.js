let tileCountX = 2;
let tileCountY = 2;

let count = 50;
let colorStep = 20;

let lineWeight = 0;
let strokeColor = 0;

let backgroundColor = 0;

let drawMode = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  strokeWeight(0.5);
  strokeCap(SQUARE);

  background(backgroundColor);


  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {
      let tileWidth = width / tileCountX;
      let tileHeight = height / tileCountY;
      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      let x1 = tileWidth / 2;
      let y1 = tileHeight / 2;
      let x2 = 0;
      let y2 = 0;
      push();
      translate(posX, posY);

      for (let side = 0; side < 4; side++) {
        for (let i = 0; i < count; i++) {
          // move end point around the four sides of the tile
          if (side == 0) {
            x2 += tileWidth / count;
            y2 = 0;
          }
          if (side == 1) {
            x2 = tileWidth;
            y2 += tileHeight / count;
          }
          if (side == 2) {
            x2 -= tileWidth / count;
            y2 = tileHeight;
          }
          if (side == 3) {
            x2 = 0;
            y2 -= tileHeight / count;
          }

          // adjust weight and color of the line
          if (i < count / 2) {
            lineWeight += 1;
            strokeColor += 60;
          } else {
            lineWeight -= 1;
            strokeColor -= 60;
          }

          // set colors depending on draw mode
          switch (drawMode) {
            case 1:
              backgroundColor = 360;
              stroke(0);
              break;
            case 2:
              backgroundColor = 360;
              stroke(0);
              strokeWeight(lineWeight);
              break;
            case 3:
              backgroundColor = 0;
              stroke(strokeColor);
              strokeWeight(mouseX / 100);
              break;
          }

          // draw the line
          line(x1, y1, x2, y2);
        }
      }

      pop();
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveFrame(timestamp() + '_##.png');
  if (key == 'p' || key == 'P') savePDF = true;

  if (key == 'q' || key == 'Q') drawMode = 1;
  if (key == 'w' || key == 'W') drawMode = 2;
  if (key == 'e' || key == 'E') drawMode = 3;
}
