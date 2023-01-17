// emoji with sunglasses

background(255, 255, 230);

// head
strokeWeight(5);
fill(255, 255, 0);
ellipse(300, 500, 500);

// glasses
fill(0, 0, 0);
rect(164, 420, 100, 50);
ellipse(214, 420, 100, 20);
ellipse(214, 470, 100, 40);
ellipse(169, 448, 30, 55);
ellipse(260, 448, 30, 55);

rect(330, 420, 100, 50);
ellipse(380, 420, 100, 20);
ellipse(380, 470, 100, 40);
ellipse(335, 448, 30, 55);
ellipse(425, 448, 30, 55);

strokeWeight(10);
line(66, 420, 538, 420);

// mouth
strokeWeight(0);
beginShape();
vertex(250, 600);
bezierVertex(250, 690, 380, 670, 500, 500);
bezierVertex(500, 500, 350, 660, 250, 600);
endShape();
