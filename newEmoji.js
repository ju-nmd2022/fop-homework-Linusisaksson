function emoji(x, y, size, closedEyes) {
  // let closedEyes = true;
  //   translate(200, 200);

  // x = 0;
  //   y = 0;
  // head
  fill(255, 255, 0);
  ellipse(x, y, 250 * size, 250 * size);

  if (closedEyes) {
    fill(200, 0, 0);
    ellipse(x - 50 * size, y - 20 * size, 50 * size);
    ellipse(x + 50 * size, y - 20 * size, 50 * size);
  } else {
    //eyes
    fill(255, 255, 255);
    ellipse(x - 50 * size, y - 20 * size, 50 * size);
    ellipse(x + 50 * size, y - 20 * size, 50 * size);

    //pupills
    fill(0, 0, 0);
    ellipse(x - 50 * size, y - 20 * size, 30 * size);
    ellipse(x + 50 * size, y - 20 * size, 30 * size);
  }

  // mouth

  push();
  beginShape();
  noFill();
  strokeWeight(3);
  vertex(x - 50 * size, y + 50 * size);
  bezierVertex(
    x - 50 * size,
    y + 100 * size,
    x + 50 * size,
    y + 100 * size,
    x + 50 * size,
    y + 50 * size
  );
  endShape();
  pop();
}
let x = 150;
let y = 150;
// let direction = "forward";

// console.log(closedEyes);

function draw() {
  if (keyIsDown(37)) {
    x -= 6;
  } else if (keyIsDown(39)) {
    x += 6;
  }
  if (keyIsDown(40)) {
    y += 6;
  } else if (keyIsDown(38)) {
    y -= 6;
  }
  background(255, 255, 255);
  emoji(x, y, 1.0, mouseIsPressed);
}

// function keyPressed() {
//   if (keyCode === 39) {
//     x = x + 6;
//     console.log(keyCode);
//   } else if (keyCode === 37) {
//     x -= 6;
//   }
//   if (keyCode === 40) {
//     y += 6;
//   } else if (keyCode === 38) {
//     y -= 6;
//   }
// }

// if (mouseIsPressed) {
//   emoji(200, 200, 1, true);
// } else {
//   emoji(200, 200, 1, false);
// }
// emoji(400, 400, 1, mouseIsPressed);

//   emoji(x, 300, 1, mouseIsPressed);
//   if (direction === "forward") {
//     if (x < 300) {
//       x += 5;
//     } else {
//       direction = "backwards";
//     }
//   } else if ((direction = "backwards")) {
//     if (x > 0) {
//       x = x - 5;
//     } else {
//       direction = "forward";
//     }
//   }
