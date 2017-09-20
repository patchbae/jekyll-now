---
 layout: post
 title: "Ellipticals"
 
---

I wanted to execute a very simple concept that used elements of randomness and order in degrees of fairly equal magnitude. Starting with the bouncing animation, I then made the speed random and mapped red to the horizontal dimension, green to the vertical dimension, and blue to the speed. The height is then only affected by the global variable set in the beginning. This yielded the following:

#### [Back and Forth](http://alpha.editor.p5js.org/patchbae/sketches/SkMdpElsW)

<iframe src="http://alpha.editor.p5js.org/embed/SkMdpElsW" width="600" height="400" scrolling="no"></iframe>

The next logical step was to add movement in the vertical dimension. I also wanted to remove user input and just have it always begin in the middle, but shoot off in a random dimension. So now there is random movement in both the vertical and horizontal dimensions, with the blue value being driven by the speed.

#### [Up and Down](http://alpha.editor.p5js.org/patchbae/sketches/rk7JvEli-)

<iframe src="http://alpha.editor.p5js.org/embed/rk7JvEli-" width="600" height="400" scrolling="no"></iframe>

The last stage was just to add a bit more symmetry. All I needed to do for this was to change the range of the mapping so that the minimum was a negative number.

#### [Mirrored](http://alpha.editor.p5js.org/patchbae/sketches/HJ12nVxoZ) 
<br />
<iframe src="http://alpha.editor.p5js.org/embed/HJ12nVxoZ"></iframe>
