let angle = 0;
let yPoints = [];
var canvas;

function windowResized(){
    resizedCanvas(windowWidth/1.5, windowHeight/16);
    resizedCanvas.position(50,10);
}

function setup() {
  canvas = createCanvas(windowWidth/1.5, windowHeight/16);
  canvas.position(400,10);
  canvas.style('position', 'fixed');
  canvas.style('z-index', '1');
  noFill();
}

function draw() {
  // Clear the background
    background(20,20,20);
    stroke(255, 4, 4, 155);
  // Calculate the y-value of the sine wave
  let offset = map(mouseY, 0, height, -1, 1);
  let y = sin(angle + offset) * 20 + height / 2;

  // Store the x and y coordinates in the array
  yPoints.push({ x: frameCount * 2 % width, y });
  
  // Draw the path
  beginShape();
  for (let i = 0; i < yPoints.length; i++) {
    vertex(yPoints[i].x, yPoints[i].y);
  }
  endShape();
  
  // Clear the array if it reaches the end
  if (yPoints.length > width) {
    yPoints.splice(0, 1);
  }
  
  // Increment the angle to control the frequency of the wave
  angle += 0.05;
}
