let oImg; // Original image, for reference
let mImg; // Modified image, for display
let blueSlider, redSlider, yellowSlider; // Sliders for threshold adjustments
let bluePicker, redPicker, yellowPicker; // Color pickers for replacement colors

function preload() {
  oImg = loadImage("../assets/mondriaan.jpg");
  mImg = loadImage("../assets/mondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  oImg.resize(0, height);
  mImg.resize(0, height);

  oImg.loadPixels();

  // Create sliders for similarity thresholds
  blueSlider = createSlider(0, 100, 50, 1);
  blueSlider.position(oImg.width + 10, 10); 
  blueSlider.style("width", "200px");

  redSlider = createSlider(0, 100, 50, 1);
  redSlider.position(oImg.width + 10, 40); 
  redSlider.style("width", "200px");

  yellowSlider = createSlider(0, 100, 50, 1);
  yellowSlider.position(oImg.width + 10, 70);
  yellowSlider.style("width", "200px");

  // Create color pickers for new colors
  bluePicker = createColorPicker('#0000FF');
  bluePicker.position(oImg.width + 220, 10);

  redPicker = createColorPicker('#FF0000');
  redPicker.position(oImg.width + 220, 40);

  yellowPicker = createColorPicker('#FFFF00');
  yellowPicker.position(oImg.width + 220, 70);
}

function draw() {
  background(255);

  mImg = oImg.get();

  mImg.loadPixels();

  for (let y = 0; y < mImg.height; y++) {
    for (let x = 0; x < mImg.width; x++) {
      let index = (x + y * mImg.width) * 4;
      let r = oImg.pixels[index];
      let g = oImg.pixels[index + 1];
      let b = oImg.pixels[index + 2];

      // Replace colors based on similarity
      if (isSimilar(r, g, b, 20, 20, 220, blueSlider.value())) {
        let newColor = bluePicker.color();
        mImg.pixels[index] = red(newColor);
        mImg.pixels[index + 1] = green(newColor);
        mImg.pixels[index + 2] = blue(newColor);
      } else if (isSimilar(r, g, b, 220, 20, 20, redSlider.value())) {
        let newColor = redPicker.color();
        mImg.pixels[index] = red(newColor);
        mImg.pixels[index + 1] = green(newColor);
        mImg.pixels[index + 2] = blue(newColor);
      } else if (isSimilar(r, g, b, 220, 220, 20, yellowSlider.value())) {
        let newColor = yellowPicker.color();
        mImg.pixels[index] = red(newColor);
        mImg.pixels[index + 1] = green(newColor);
        mImg.pixels[index + 2] = blue(newColor);
      }
    }
  }

  // Update and display the modified image
  mImg.updatePixels();
  image(oImg, 0, 0);
  image(mImg, oImg.width, 0);
}

// Function to check color similarity
function isSimilar(r, g, b, targetR, targetG, targetB, threshold) {
  return (
    abs(r - targetR) < threshold &&
    abs(g - targetG) < threshold &&
    abs(b - targetB) < threshold
  );
}
