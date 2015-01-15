var canvas;
var stage: createjs.Stage;

function init() {
    canvas = document.getElementById("firstgame");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
        stage.update();
}
function main() {
    var helloText = new createjs.Text("Hello World", "40px Consolas", "#000000");
    stage.addChild(helloText);
}


