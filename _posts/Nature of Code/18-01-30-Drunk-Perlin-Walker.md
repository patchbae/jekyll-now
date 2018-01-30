---

 layout: post
 title: "Drunk Perlin Walker"
 category: "Nature of Code"
 
---

My attempts at using Perlin noise for movement and a drunken step for color. 

#### [Perlin Walker](https://alpha.editor.p5js.org/patchbae/sketches/S1QCZYarz)

<iframe width="640" height="360" src="https://alpha.editor.p5js.org/embed/S1QCZYarz" scrolling="no"></iframe>

I started by manipulating the Perlin noise walker so that the colors varied within a certain range. 

#### [Random Color Perlin Walker](https://alpha.editor.p5js.org/patchbae/sketches/H1SRbKpSM)

<iframe width="640" height="360" src="https://alpha.editor.p5js.org/embed/H1SRbKpSM" scrolling="no"></iframe>

I was inspired by the Max/MSP object called "drunk", which causes a change in value within a certain range (i.e. the value will either be decreased or increased by a value between x and y). I am applying this drunken step separately to the red, green, and blue values. 

#### [Perlin Color Wheel](https://alpha.editor.p5js.org/patchbae/sketches/BkTkpIpBf)

<iframe width="1080" height="720" align="left" src="https://alpha.editor.p5js.org/embed/BkTkpIpBf" scrolling="no"></iframe>

I then moved onto to create a multitude of objects, switching out the ellipses for lines. What I did initially to create the second coordinate, was simply to inverse the mapping for noise offset for the second point. That way the line was always centered around the middle of the canvas. I also removed all green for a more coherent color scheme. You can also click to add additional lines. 

#### [Variations](https://alpha.editor.p5js.org/patchbae/sketches/H1Z5xtaSf)

<iframe width="1080" height="720" align="center" src="https://alpha.editor.p5js.org/embed/H1Z5xtaSf" scrolling="no"></iframe>

This was simply creating a second noise offset sot hat the lines would be more random and not centered around the middle of the canvas.


