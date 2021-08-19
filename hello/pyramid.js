const s = function(sketch) {

 let pyramid_s = 100;
 let pyramid_h = 50;
 let separation = 0;
 let vseparation = 0;
 let t = -sketch.PI / 4;
 let vt = 0;
 let pf;

 sketch.preload = function() {
    pf = sketch.loadFont("sudegnakno4.ttf");
 }

 sketch.setup = function() {
     sketch.createCanvas(600, 400, sketch.WEBGL);
     sketch.textFont(pf);
 }

 sketch.pyramid = function(s, h) {
     sketch.stroke(200);
     sketch.strokeWeight(2);
     sketch.beginShape();
     sketch.vertex(-s / 2, -s / 2, -h);
     sketch.vertex(s / 2, -s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(s / 2, -s / 2, -h);
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(-s / 2, -s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(-s / 2, -s / 2, -h);
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(s / 2, -s / 2, -h);
     sketch.endShape();
 }

 sketch.half_pyramid = function(s, h) {
     sketch.stroke(200);
     sketch.strokeWeight(2);
     sketch.beginShape();
     sketch.vertex(-s / 2, 0, -h);
     sketch.vertex(s / 2, 0, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(s / 2, 0, -h);
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(-s / 2, 0, -h);
     sketch.vertex(0, 0, 0);
     sketch.endShape();
     sketch.beginShape();
     sketch.vertex(-s / 2, 0, -h);
     sketch.vertex(-s / 2, s / 2, -h);
     sketch.vertex(s / 2, s / 2, -h);
     sketch.vertex(s / 2, 0, -h);
     sketch.endShape();
 }

 sketch.draw = function() {
     sketch.translate(-sketch.width / 2, -sketch.height / 2);
     sketch.background(0);
     sketch.fill(255);
     sketch.textAlign(sketch.CENTER, sketch.CENTER);
     sketch.textSize(50);
     sketch.text("RIGHT/LEFT: separate", 150, 40);
     sketch.text("UP/DOWN: rotate", 450, 40);
     sketch.translate(sketch.width / 2, sketch.height / 2, 100);
     sketch.rotateX(t);
     sketch.rotateY(sketch.PI / 4);
     sketch.fill("#66d8780a");
     sketch.push();
     sketch.rotateX(sketch.PI / 2);
     sketch.pyramid(pyramid_s, pyramid_h);
     sketch.pop();
     sketch.fill(128, 128, 128, 20);
     sketch.push();
     sketch.rotateX(-sketch.PI / 2);
     sketch.pyramid(pyramid_s, pyramid_h);
     sketch.pop();
     sketch.fill("#66d8780a");
     for (let i = 0; i < 4; i++) {
         sketch.push();
         sketch.translate(0, 0, -separation);
         sketch.half_pyramid(pyramid_s, pyramid_h);
         sketch.pop();
         sketch.rotateY(sketch.PI / 2);
     }
     sketch.fill(128, 128, 128, 50);
     sketch.push();
     sketch.rotateX(sketch.PI);
     for (let i = 0; i < 4; i++) {
         sketch.push();
         sketch.translate(0, 0, -separation);
         sketch.half_pyramid(pyramid_s, pyramid_h);
         sketch.pop();
         sketch.rotateY(sketch.PI / 2);
     }
     sketch.pop();
     sketch.stroke(255, 255, 255, 100);
     sketch.sphere(1);
     separation += vseparation;
     if (separation < 0) {
         separation = 0;
         vseparation = 0;
     }
     t += vt;
 }

 sketch.keyPressed = function() {
     if (sketch.keyCode == sketch.RIGHT_ARROW) {
         vseparation = 10;
     } else if (sketch.keyCode == sketch.LEFT_ARROW) {
         vseparation = -10;
     } else if (sketch.keyCode == sketch.UP_ARROW) {
         vt = sketch.PI / 25;
     } else if (sketch.keyCode == sketch.DOWN_ARROW) {
         vt = -sketch.PI / 25;
     }
 }

 sketch.keyReleased = function() {
     if (sketch.keyCode == sketch.UP_ARROW || sketch.keyCode == sketch.DOWN_ARROW) vt = 0;
     else if (sketch.keyCode == sketch.RIGHT_ARROW || sketch.keyCode == sketch.LEFT_ARROW) {
         vseparation = 0;
     }
 }


 sketch.mousePressed = function() {
     if (sketch.mouseX < 0 || sketch.mouseX>sketch.width || sketch.mouseY<0 || sketch.mouseY>sketch.height) return;

     let x = sketch.mouseX, 
         y = sketch.mouseY, 
         px = sketch.pmouseX, 
         py = sketch.pmouseY;

     if (x < sketch.width * .45) 
         vseparation = -5;
     else if (x > sketch.width * .55) 
         vseparation = 5;

     if (y < sketch.height * .45) 
         vt = sketch.PI/75;
     else if (y > sketch.height * .55) 
         vt = -sketch.PI/75;
 }

 sketch.mouseReleased = function() {
     vt = vseparation = 0;
 }

 sketch.windowResized = function() {
    let contents = document.getElementsByClassName("post-content");
    if (contents.length === 1)
    {
        let w = contents[0].offsetWidth;
        sketch.resizeCanvas(w * .8, sketch.height);

        pyramid_s = 100 * sketch.width / 600.0;
        pyramid_h = 50 * sketch.width / 600.0; 
        separation = 0;
        vseparation = 0;
    }
 }

} // s

let myp5_2 = new p5(s, "sketch-container-2");



