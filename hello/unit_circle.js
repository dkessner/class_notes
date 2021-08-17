 let theta = 0;
 let dtheta = 0;
 let axes_center_1;
 let axes_center_2;
 let radius;

 function setup() {
     createCanvas(800, 400);
     axes_center_1 = new p5.Vector(width / 4, height / 2);
     axes_center_2 = new p5.Vector(1.1 * width / 2, height / 2);
     radius = .9 * width / 4;
 }

 function drawAxes() {
     strokeWeight(1);
     stroke(0, 255, 0);
     line(axes_center_1.x - radius, axes_center_1.y, axes_center_1.x + radius, axes_center_1.y);
     line(axes_center_1.x, axes_center_1.y - radius, axes_center_1.x, axes_center_1.y + radius);
     line(axes_center_2.x - radius * .1, axes_center_2.y, axes_center_2.x + radius * 1.9, axes_center_2.y);
     line(axes_center_2.x, axes_center_2.y - radius, axes_center_2.x, axes_center_2.y + radius);
 }

 function drawUnitCircle() {
     strokeWeight(1);
     stroke(128);
     noFill();
     ellipse(axes_center_1.x, axes_center_1.y, radius * 2, radius * 2);
 }

 function X(angle) {
     angle = angle % (2 * PI);
     if (angle < 0) angle += 2 * PI;
     let x = axes_center_2.x + angle * radius * 1.9 / 2 / PI;
     return x;
 }

 function Y(angle) {
     return axes_center_2.y - radius * sin(angle);
 }

 function drawSin() {
     strokeWeight(1);
     beginShape();
     for (let t = 0; t < 2 * PI; t += .01) {
         vertex(X(t), Y(t));
     }
     endShape();
 }

 function drawClockHand() {
     strokeWeight(3);
     stroke(255);
     let x = axes_center_1.x + radius * cos(theta);
     let y = axes_center_1.y - radius * sin(theta);
     line(axes_center_1.x, axes_center_1.y, x, y);
     line(axes_center_1.x, axes_center_1.y, axes_center_1.x, y);
 }

 function drawVerticalBar() {
     strokeWeight(3);
     stroke(255);
     let x = X(theta);
     let y = Y(theta);
     line(x, axes_center_2.y, x, y);
 }

 function draw() {
     background(0);
     drawAxes();
     drawUnitCircle();
     drawClockHand();
     drawSin();
     drawVerticalBar();
     theta += dtheta;
 }

 function keyPressed() {
     if (keyCode == UP_ARROW || keyCode == RIGHT_ARROW) dtheta = .04;
     else if (keyCode == DOWN_ARROW || keyCode == LEFT_ARROW) dtheta = -.04;
 }

 function keyReleased() {
     dtheta = 0;
 }
