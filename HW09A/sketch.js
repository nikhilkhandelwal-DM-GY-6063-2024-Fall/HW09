let oImg;
let mImg;
let redPicker, yellowPicker, bluePicker;

function preload() {
  oImg = loadImage("../assets/mondriaan.jpg");
  mImg = loadImage("../assets/mondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  oImg.resize(0, height);
  mImg.resize(0, height);
  oImg.loadPixels();

  // Create color pickers for user input
  redPicker = createColorPicker('#FF0000');
  redPicker.position(10, height + 10);

  yellowPicker = createColorPicker('#FFFF00');
  yellowPicker.position(10, height + 40);

  bluePicker = createColorPicker('#0000FF');
  bluePicker.position(10, height + 70);
}

function draw() {
  mImg.loadPixels();

  let redTarget = redPicker.color();
  let yellowTarget = yellowPicker.color();
  let blueTarget = bluePicker.color();

  for (let y = 0; y < oImg.height; y++) {
    for (let x = 0; x < oImg.width; x++) {
      let index = (x + y * oImg.width) * 4;
      let r = oImg.pixels[index];
      let g = oImg.pixels[index + 1];
      let b = oImg.pixels[index + 2];

      if (isSimilar(r, g, b, 255, 0, 0)) {
        setColor(mImg, index, red(redTarget), green(redTarget), blue(redTarget));
      } else if (isSimilar(r, g, b, 255, 255, 0)) {
        setColor(mImg, index, red(yellowTarget), green(yellowTarget), blue(yellowTarget));
      } else if (isSimilar(r, g, b, 0, 0, 255)) {
        setColor(mImg, index, red(blueTarget), green(blueTarget), blue(blueTarget));
      } else {
        setColor(mImg, index, r, g, b);
      }
    }
  }

  mImg.updatePixels();
  image(mImg, 0, 0);
}

// Helper function to check color similarity
function isSimilar(r1, g1, b1, r2, g2, b2) {
  let threshold = 50; // Adjust as needed
  return abs(r1 - r2) < threshold && abs(g1 - g2) < threshold && abs(b1 - b2) < threshold;
}

// Helper function to set pixel colors
function setColor(img, index, r, g, b) {
  img.pixels[index] = r;
  img.pixels[index + 1] = g;
  img.pixels[index + 2] = b;
  img.pixels[index + 3] = 255; // Fully opaque
}
