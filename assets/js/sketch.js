let canvasWidth = 0, canvasHeight = 0;
let canvasContainer = document.getElementById('canvas-container');
let matrix, numberOfColumns = 40, numberOfRows = 20;
let widthGap = 0, heightGap = 0;

function setup(){
    canvasWidth = canvasContainer.clientWidth - 25;
    canvasHeight = canvasContainer.offsetHeight - 40;
    console.log({canvasWidth, canvasHeight});
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container');

    matrix = new Array(numberOfColumns);
    for (let index = 0; index < numberOfColumns; index++) {
        matrix[index] = new Array(numberOfRows);
    }
    widthGap = canvasWidth / numberOfColumns;
    heightGap = canvasHeight/ numberOfRows;
    console.log(matrix)
}

function windowResized() {
    canvasWidth = canvasContainer.offsetWidth;
    canvasHeight = canvasContainer.offsetHeight;
    console.log({canvasWidth, canvasHeight});
    resizeCanvas(canvasWidth, canvasHeight);
  }

function draw(){
    background(127);
    stroke(255);
    for (let column = 0; column < numberOfColumns; column++) {
        for (let row = 0; row < numberOfRows; row++) {
            rect(column*widthGap,row * heightGap, widthGap, heightGap);
            let c = color(getRandomBetween(0, 255), getRandomBetween(0, 255), getRandomBetween(0, 255));
            fill(c);
        }
        
    }
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }