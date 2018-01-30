---

 layout: post
 title: "Drunk Perlin Walker"
 category: "Nature of Code"
 
---

My attempts at using Perlin noise for movement and a drunken step for color. 

#### [Perlin Walker](https://alpha.editor.p5js.org/patchbae/sketches/S1QCZYarz)

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/S1QCZYarz" scrolling="no"></iframe>

I started by manipulating the Perlin noise walker so that the colors varied within a certain range. 

#### [Random Color Perlin Walker](https://alpha.editor.p5js.org/patchbae/sketches/H1SRbKpSM)

<iframe src="https://alpha.editor.p5js.org/embed/H1SRbKpSM"></iframe>

I was inspired by the Max/MSP object called "drunk", which causes a change in value within a certain range (i.e. the value will either be decreased or increased by a value between x and y). I am applying this drunken step separately to the red, green, and blue values. 

#### [Perlin Color Wheel](https://alpha.editor.p5js.org/patchbae/sketches/BkTkpIpBf)

<iframe src="https://alpha.editor.p5js.org/embed/BkTkpIpBf"></iframe>

I then moved onto to create a multitude of objects, switching out the ellipses for lines. What I did initially to create the second coordinate, was simply to inverse the mapping for noise offset for the second point. That way the line was always centered around the middle of the canvas. You can also click to add additional lines. 


