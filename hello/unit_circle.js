//
// unit_circle.js
//

const unitCircleSketchMaker = function(sketch) {

 let theta = 0;
 let dtheta = 0;
 let axes_center_1;
 let axes_center_2;
 let radius;

 sketch.initialize = function() {
     axes_center_1 = new p5.Vector(sketch.width * .12, sketch.height / 2);
     axes_center_2 = new p5.Vector(sketch.width * .3, sketch.height / 2);
     radius = .9 * axes_center_1.x;
 }
 
 sketch.setup = function () {
     let canvas = sketch.createCanvas(600, 300);
     sketch.initialize();
 }

 sketch.drawAxes = function() {
     sketch.strokeWeight(1);
     sketch.stroke(128);

     sketch.line(axes_center_1.x - radius, axes_center_1.y, axes_center_1.x + radius, axes_center_1.y);
     sketch.line(axes_center_1.x, axes_center_1.y - radius, axes_center_1.x, axes_center_1.y + radius);

     sketch.line(axes_center_2.x - radius * .1, axes_center_2.y, axes_center_2.x + radius * 2 * sketch.PI, axes_center_2.y);
     sketch.line(axes_center_2.x, axes_center_2.y - radius, axes_center_2.x, axes_center_2.y + radius);
 }

 sketch.drawUnitCircle = function() {
     sketch.strokeWeight(1);
     sketch.stroke(128);
     sketch.noFill();
     sketch.ellipse(axes_center_1.x, axes_center_1.y, radius * 2, radius * 2);
 }

 sketch.X = function(angle) {
     angle = angle % (2 * sketch.PI);
     if (angle < 0) angle += 2 * sketch.PI;
     let x = axes_center_2.x + angle * radius;
     return x;
 }

 sketch.Y = function(angle) {
     return axes_center_2.y - radius * sketch.sin(angle);
 }

 sketch.drawSin = function() {
     sketch.strokeWeight(1);
     sketch.stroke(200);
     sketch.beginShape();
     for (let t = 0; t < 2 * sketch.PI; t += .01) {
         sketch.vertex(this.X(t), this.Y(t));
     }
     sketch.endShape();
 }

 sketch.drawClockHand = function() {
     sketch.strokeWeight(5);
     sketch.stroke(255, 0, 0);
     let x = axes_center_1.x + radius * sketch.cos(theta);
     let y = axes_center_1.y - radius * sketch.sin(theta);
     sketch.line(axes_center_1.x, axes_center_1.y, x, y);

     sketch.stroke(200);
     sketch.line(axes_center_1.x, axes_center_1.y, axes_center_1.x, y);
 }

 sketch.drawVerticalBar = function() {
     sketch.strokeWeight(5);
     sketch.stroke(200);
     let x = sketch.X(theta);
     let y = sketch.Y(theta);
     sketch.line(x, axes_center_2.y, x, y);
 }

 sketch.drawTheta = function() {
     sketch.strokeWeight(4);
     sketch.stroke(0, 0, 255);
     sketch.arc(axes_center_1.x, axes_center_1.y, radius*2, radius*2, -theta, 0);
     sketch.line(axes_center_2.x, axes_center_2.y, sketch.X(theta), axes_center_2.y);
 }

 sketch.draw = function() {
     sketch.background(0);
     sketch.drawAxes();
     sketch.drawUnitCircle();
     sketch.drawClockHand();
     sketch.drawSin();
     sketch.drawVerticalBar();
     sketch.drawTheta();
     theta += dtheta;
 }

 sketch.keyPressed = function() {
     if (sketch.mouseX < 0 || sketch.mouseX>sketch.width || sketch.mouseY<0 || sketch.mouseY>sketch.height) return;

     if (sketch.keyCode == sketch.UP_ARROW || sketch.keyCode == sketch.RIGHT_ARROW) dtheta = .04;
     else if (sketch.keyCode == sketch.DOWN_ARROW || sketch.keyCode == sketch.LEFT_ARROW) dtheta = -.04;
 }

 sketch.keyReleased = function() {
     dtheta = 0;
 }

} // unitCircleSketchMaker


