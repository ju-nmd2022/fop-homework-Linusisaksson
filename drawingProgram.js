background(255, 255, 255);

let lastX = 0;
let lastY = 0;
mouseIsActive = false;

function draw() {
  //   background(255, 255, 255);
  fill(0, 0, 0);
  strokeWeight(3);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      line(lastX, lastY, mouseX, mouseY);
    }

    lastX = mouseX;
    lastY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}
