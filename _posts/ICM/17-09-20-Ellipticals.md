---
 layout: post
 title: "Ellipticals"
 
---

I wanted to execute a very simple concept that used elements of randomness and order in degrees of fairly equal magnitude. Starting with the bouncing animation, I then made the speed random and mapped red to the horizontal dimension, green to the vertical dimension, and blue to the speed. The height is then only affected by the global variable set in the beginning. This yielded the following:

#### [Back and Forth](http://alpha.editor.p5js.org/patchbae/sketches/SkMdpElsW)

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/SkMdpElsW"></iframe>

The next logical step was to add movement in the vertical dimension. I also wanted to remove user input and just have it always begin in the middle, but shoot off in a random dimension. So now there is random movement in both the vertical and horizontal dimensions, with the blue value being driven by the speed.

#### [Up and Down](http://alpha.editor.p5js.org/patchbae/sketches/rk7JvEli-)

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/rk7JvEli-"></iframe>

The last stage was just to add a bit more symmetry. All I needed to do for this was to change the range of the mapping so that the minimum was a negative number. I created two versions of this. One where the ellipses are all circles and are symmetrical about the vertical axis. And a second version where the width of the ellipse is driven by the horizontal axis, the height of the ellipse is driven by the veritcal axis, and the fill is changed to black.

#### [Mirrored X](http://alpha.editor.p5js.org/patchbae/sketches/HJ12nVxoZ) 

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/HJ12nVxoZ"></iframe>

#### [Mirrored XY (No Fill)](http://alpha.editor.p5js.org/patchbae/sketches/r11z6HejZ) 

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/r11z6HejZ"></iframe>





