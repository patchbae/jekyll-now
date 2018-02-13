---

 layout: post
 title: "Harmonic Emotion"
 category: "Nature of Code"
 
---
I've continued the theme of breathing new life into my previous sketches. This uses a similar framework as my Drunk Perlin Walker and adds the idea of harmonic motion to the size, position, and color of each object. I used the gif template and modified the rest of the code to incorporate a class for generating ellipses. 

#### [Lissajous Ellipses](https://alpha.editor.p5js.org/patchbae/sketches/ryki9rALz) [Fullscreen version](https://alpha.editor.p5js.org/full/ryki9rALz)

This first sketch draws ellipses. Their position, size, and color are all being modulated use sine and cosine functions associted with the percent of the loop. However, whenever I tried to export the loops, I was unable to sequence the downloaded images into a perfect loop. I got close with some attempts, but none were perfect. I would venture a guess that it has something to do with my code. The other strange behavior I noticed was that, if you delete the section of code that draws the percent of the loop, the exported images no longer start from the first frame and sometime export out of order

<iframe frameborder="no" width="100%" height="100%" align="center" margin="0 auto" display="block" src="https://alpha.editor.p5js.org/embed/ryki9rALz" scrolling="no"></iframe>

#### [Flapping Lines](https://alpha.editor.p5js.org/patchbae/sketches/ryn2XqCIf) [Fullscreen version](https://alpha.editor.p5js.org/full/ryn2XqCIf)

The second sketch simplifies things a bit and just applies harmonic motion to the location of 4 vertices. The motion is mirrored about the center to create a symmetrical look. I used the beginShape() function to connect the 4 vertices with lines. This was the result:

<iframe frameborder="no" width="100%" height="100%" align="center" margin="0 auto" display="block" src="https://alpha.editor.p5js.org/embed/ryn2XqCIf" scrolling="no"></iframe>
