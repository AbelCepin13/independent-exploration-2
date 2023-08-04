// let xPos = 250;
// let yPos = 0;
// let xSpeed = 2;
// let ySpeed = 2;
// let score = 0;

// function setup() {
//     createCanvas(500, 500);

//     noStroke();

//     rectMode(CENTER);
// }

// function draw() {
//     background(222);

//     // draw goal
//     fill(0, 255, 0);
//     rect(250, 490, 60, 20);

//     // draw ball
//     fill(255, 0, 255);
//     rect(30, xPos, yPos);

//     // draw score
//     fill(18);
//     textSize(20);
//     text("Score: " + score, 0, 0)

//     // check if in goal
//     if (xPos + 15 <= 220 && xPos - 15 <= 280 && yPos + 15 >= 480) {
//         score;
//         // reset position and speed
//         xPos = random(15, 485);
//         yPos = 0;
//         xSpeed = random(-5, 5);
//         ySpeed = random(0, 10);
//     }

//     // move forward
//     xPos += xSpeed;
//     yPos += ySpeed;

//     // wrap around if boundary exceeded
//     if (xPos < 0) {
//         xPos = 500;
//     }
//     if (xPos > 500) {
//         xPos = 0;
//     }
//     if (yPos > 500) {
//         yPos = 0;
//         score--;
//     }
// }

// function mouseClicked() {
//     xSpeed = random(-5, 5);
//     ySpeed = random(0, 5);
// }
let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;
const squareSize = 30;

function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, squareSize, squareSize);

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 25);

    // check if in goal
    if (xPos + squareSize / 2 >= 220 && xPos - squareSize / 2 <= 280 && yPos + squareSize / 2 >= 480) {
        score++;
        // reset position and speed
        xPos = random(squareSize / 2, width - squareSize / 2);
        yPos = 0;
        ySpeed = random(1, 10);
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos + squareSize / 2 < 0) {
        xPos = width + squareSize / 2;
    }
    if (xPos - squareSize / 2 > width) {
        xPos = 0 - squareSize / 2;
    }
    if (yPos - squareSize / 2 > height) {
        yPos = 0 - squareSize / 2;
        score--;
    }
}

function mouseClicked() {
    // Switch direction on every click
    xSpeed = -xSpeed;
}
