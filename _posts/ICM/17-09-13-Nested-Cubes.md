---
 -layout: post
 -title: A Series of Cubes 
 
---

I initially decided to make a series of nested cubes, using a 3-color palette. I figured I would go about this by drawing three quads to make a cube, encapsulating the cube code into a function, and then performing displacements after that. Let's start with figuring out how to draw a cube and center it on the screen... 

# [A Cube](http://alpha.editor.p5js.org/patchbae/sketches/Hk42zAI5b)

![First Cube]({{ site.url }}/images/FirstCubeCode.png)


This yielded a pretty decent result considering the math was guesstimated. I definitely went with a trial and error approach until this result was achieved. I'm not entirely sure why PI is in there... but it kinda worked? The next step was to try and make some more cubes using "translate".

# [7 Cubes](https://alpha.editor.p5js.org/patchbae/sketches/H1sFrnB5W)

![First Cube Tesselation]({{ site.url }}/images/FirstCubeCode_Tessa.png)

Cool, that kinda worked too! However, if you open the link, you can notice the edges of the cubes overlap slightly in the vertical domain. I also noticed that the cubes looked too tall. So I knew I'd need to adjust my function for drawing the cube and then adjust my vertical displacements if I wanted them to be flush. I did some math and calculated the proper vertical displacement to be the square root of 2 (1.414). My coordinate system revolves around the center point for each cube, so I had to factor those displacement values into it as well. I could have done some trigonometry to figure out the perfect vertical displacement, but it was easy enough to play with until getting a satisfactory result. So factoring all of that into account, here's a slightly tidier tesselation:

# [Fixed the Height](http://alpha.editor.p5js.org/patchbae/sketches/rynS11wcZ)

![First Cube Tesselation]({{ site.url }}/images/FirstCubeCode_Tessa_Height.png)

I was pretty happy with how this turned out, but I was having some fun at this point and decided to see how far I could take it before I fell asleep. It's worthy of its own blog post at some point, but I'll just post the results below for now:

# [Rainbow Cubes](https://alpha.editor.p5js.org/patchbae/sketches/H1p2bLI5b)

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/H1p2bLI5b" scrolling="no"></iframe>



