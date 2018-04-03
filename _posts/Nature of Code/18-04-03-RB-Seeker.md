---

 layout: post
 title: "Hot and Cold Seeker"
 category: "Nature of Code"
 
---

For this assignment, I re-worked the "Smart Rockets" code to alter how it displayed the rockets. To begin, I simply made the rockets into ellipses. I then mapped the red and alpha channels to vary based on the distance to the target, and I mapped the blue chanenl to vary based on the current lifecycle. When the target is hit, it erases the current target, adds a new target, adds a new obstacle, clears the background, and immediately advances to the next generation.

Here is a [fullscreen link](http://alpha.editor.p5js.org/full/BypjgwliM) to the patch and here is the [code](http://alpha.editor.p5js.org/patchbae/sketches/BypjgwliM).

