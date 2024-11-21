let video;
let faceMesh;
let faces = [];
let distortionStrength = 10;

function preload() {
  faceMesh = ml5.faceMesh();
}

function gotFaces(results) {
  faces = results;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  background(30, 30, 30);

  // Draw mirrored video
  push();
  translate(width, 0); // Flip the video horizontally
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Apply face-based distortion effect
  if (faces.length > 0) {
    let keypoints = faces[0].keypoints;

    for (let i = 0; i < keypoints.length; i++) {
      let point = keypoints[i];
      
      // Correct the X-coordinate for the mirrored video
      let dX = map(point.x, 0, video.width, width, 0);
      let dY = map(point.y, 0, video.height, 0, height);

      // Add a distortion ripple
      noFill();
      stroke(255, 0, 150, 150);
      strokeWeight(2);
      ellipse(dX, dY, distortionStrength * 5);
    }

    // Increase distortion strength over time
    distortionStrength = distortionStrength + 0.1;

    // Reset distortion strength after a threshold
    if (distortionStrength > 30) {
      distortionStrength = 10;
    }
  }
}
