# Neon Mondrian - HW09A

## **Project Overview**
This project reimagines Piet Mondrian's iconic "Composition in Red, Yellow, Blue, and Black" using code to dynamically replace its colors. The application allows users to modify the red, yellow, and blue regions of the painting through sliders and color pickers, creating an interactive and personalized remix of the artwork.

---

## **Features**
- **Dynamic Color Replacement**: Replace the red, yellow, and blue areas of the painting with custom colors.
- **Interactive Sliders**: Adjust the similarity threshold for detecting each target color.
- **Color Pickers**: Choose new colors for the regions dynamically.
- **Side-by-Side Comparison**: Display the original and modified images for easy comparison.

---

## **How It Works**
1. **Color Detection**:
   - The program identifies red, yellow, and blue pixels by comparing their RGB values to predefined target colors.
   - A similarity threshold determines how "close" a pixel's color needs to be to match the target.

2. **Color Replacement**:
   - Detected colors are replaced with user-selected colors from the color pickers.

3. **Interactivity**:
   - Sliders allow fine-tuning of the similarity thresholds, enabling precise control over color detection.
   - Color pickers enable dynamic selection of replacement colors.

---

## **Controls**
### **Sliders**:
- Adjust the sensitivity for detecting each target color:
  - **Blue Threshold**: Adjusts how similar a pixel must be to the original blue color.
  - **Red Threshold**: Adjusts how similar a pixel must be to the original red color.
  - **Yellow Threshold**: Adjusts how similar a pixel must be to the original yellow color.

### **Color Pickers**:
- Select the replacement color for each region:
  - **Blue Replacement**: Choose a new color for blue areas.
  - **Red Replacement**: Choose a new color for red areas.
  - **Yellow Replacement**: Choose a new color for yellow areas.

---

## **Design Process**
1. **Objective**: To create an interactive, user-friendly experience for remixing Mondrian's work.
2. **Steps**:
   - Implemented pixel manipulation using `loadPixels()` and `updatePixels()`.
   - Created a similarity function to detect colors with an adjustable threshold.
   - Integrated sliders and color pickers for customization.
   - Added side-by-side display for comparing the original and modified images.
3. **Challenges**:
   - Balancing color detection sensitivity to ensure accurate results without over-detection.
   - Positioning UI elements for accessibility and clarity.

---

## **Potential Enhancements**
- Add transparency and a background collage for more creative effects.
- Modify black and white areas to incorporate patterns or textures.
- Include additional interaction features, such as:
  - Reset button to revert changes.
  - Save button to download the modified artwork.

---

## **Acknowledgments**
- Inspired by Piet Mondrian’s "Composition in Red, Yellow, Blue, and Black."
- Guided by course exercises and tutorials on image manipulation with p5.js.

# Face-Driven Distortion Art with ml5.js

## Overview

This project is a creative exploration of camera-based interactivity using the `ml5.js` library. The sketch detects facial keypoints through a webcam and dynamically generates a ripple-like distortion effect around the face. It also incorporates a mirrored video feed to create a visually engaging and reflective experience.

This project showcases the possibilities of interactive, non-traditional interfaces by leveraging face detection to influence visual art in real-time.

---

## Design Process

The design process focused on the following key aspects:

1. **Conceptualization**:
   - The idea stemmed from exploring the use of facial movements to dynamically interact with visuals, inspired by Yoko Ono's conceptual art and the reflective properties of mirrors.
   - Incorporating a mirrored video feed adds a layer of abstraction, making the interaction visually compelling.

2. **Technical Planning**:
   - Used `ml5.js`'s FaceMesh model to detect and retrieve keypoints of the face in real time.
   - Carefully aligned the face detection keypoints with the mirrored video feed for accurate positioning of distortions.

3. **Artistic Considerations**:
   - Chose ripple effects to highlight the fluid nature of movement and interaction.
   - Added dynamic distortion that grows over time, representing the evolving relationship between human motion and digital art.

4. **Polish**:
   - Ensured smooth transitions and professional presentation through thoughtful scaling and alignment adjustments.
   - Optimized the code to maintain performance and visual appeal.

---

## How It Works

1. **Video Feed**:
   - A webcam feed is mirrored horizontally and displayed on the canvas.

2. **Face Detection**:
   - The `ml5.js` FaceMesh model detects keypoints of the user's face.

3. **Dynamic Ripple Effect**:
   - Ripple distortions are drawn around the detected keypoints, growing dynamically over time.

4. **Interaction**:
   - Moving your face alters the position of distortions, while the mirrored video ensures a reflective visual experience.
