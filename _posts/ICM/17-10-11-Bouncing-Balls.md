---

layout: post
title: Bouncing Balls

---

I wanted to expand on the bouncing ball example that was presented a few classes ago, and with my new comprehension of objects, the logical course was to make more bouncy balls!

#### [What Goes Up...](https://alpha.editor.p5js.org/patchbae/sketches/HyjgB1n3-)
I started by using the current mouse position to set the spawn point for the balls. They then bounce either up or down at a random speed between -5 and 5, and a random color and size is assigned to each one. Once a ball hits the edge of the canvas, it bounces in the other direction. 

<iframe width="400" height="400" src="https://alpha.editor.p5js.org/embed/HyjgB1n3-" scrolling="no"></iframe>


#### [Side to Side](https://alpha.editor.p5js.org/patchbae/sketches/BJtOEy2h-)
The next step was simply to add movement in the x-axis. This was done by creating separate variables for both x- and y-speed, and multiplying said speed by -1 whenever it hits an edge (since multiplying by a negative will always give you the opposite sign as an output). This creates a nice little un

<iframe width="400" height="400" src="https://alpha.editor.p5js.org/embed/BJtOEy2h-" scrolling="no"></iframe>


#### [Paint and Incorporate](https://alpha.editor.p5js.org/patchbae/sketches/ryFMt0MnW)
The first change was removing the background function so that the balls would paint their path. Then I added Jason's cannon object and modified it to fire black rectangles. This created a nice dynamic of the balls painting and the rectangles erasing. 

<iframe width="400" height="400" src="https://alpha.editor.p5js.org/embed/ryFMt0MnW" scrolling="no"></iframe>

The last thing I had wanted to do was figure out a way to assign a lifetime to each ball, so that their colors would dim over time and, once they became black, would actually be removed from the array. However, I didn't have much luck in this area. 


