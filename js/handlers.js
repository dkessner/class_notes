//
// handlers.js
//


function addHandlers(sketchMaker)
{
    return function(sketch) {
        sketchMaker(sketch);
        addMouseKeyDelegate(sketch);
        addWindowResizeHandler(sketch);

        // hack: force call windowResized() from setup()
        // (alternative: try generating resize event)

        let originalSetup = sketch.setup;

        sketch.setup = function() {
            originalSetup();
            sketch.windowResized();
        }
    }
}


const addMouseKeyDelegate = function(sketch) {

    sketch.mousePressed = function() {

        if (sketch.mouseX < 0 || sketch.mouseX>sketch.width || 
            sketch.mouseY<0 || sketch.mouseY>sketch.height) 
            return;

        if (sketch.mouseX < sketch.width * .25) 
            sketch.keyCode = sketch.LEFT_ARROW;
        else if (sketch.mouseX > sketch.width * .75) 
            sketch.keyCode = sketch.RIGHT_ARROW;
        else if (sketch.mouseY < sketch.height * .25) 
            sketch.keyCode = sketch.UP_ARROW;
        else if (sketch.mouseY > sketch.height * .75) 
            sketch.keyCode = sketch.DOWN_ARROW;
        else
            sketch.keyCode = null;

        sketch.keyPressed();
    }

    sketch.mouseReleased = sketch.keyReleased;
}


const addWindowResizeHandler = function(sketch) {
    sketch.windowResized = function() {
        let contents = document.getElementsByClassName("post-content");
        if (contents.length === 1)
        {
            let w = contents[0].offsetWidth;
            sketch.resizeCanvas(w, sketch.height);
            if ("initialize" in sketch && typeof sketch.initialize === "function")
                sketch.initialize();
        }
    }
}



