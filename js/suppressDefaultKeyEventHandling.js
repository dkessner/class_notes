//
// suppressDefaultKeyEventHandling.js
//

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight", "Tab"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

