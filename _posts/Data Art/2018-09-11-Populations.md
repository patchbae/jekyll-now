---
 layout: post
 title: "Visualizing Foreign Populations in the U.S."
 categories: Data Art
 
---

So to be perfectly honest, I struggled a bit longer than I should have just parsing the data at first, haha. I needed a bit of a refresher on object arrays. But once I figured that out, it was really fun to try and figure out ways to visualize it. I started with just a simple, bar graph style chart. I added color for the regions and a readout based on mouse position. My biggest diffiulty was working with scale (as some values were extremely small compared to the maximum). For some reason, full screen and embedded versions of these sketches hang at the beginnign wtih a "Loading" message. 

[Link to editor](https://editor.p5js.org/patchbae/sketches/By3wLpEum)

My second iteration of this pretty much just swapped out rectangles for ellipses, using the estimate for ellipse height and vertical position. 

[Link to editor](https://editor.p5js.org/patchbae/sketches/B1X_ckSd7)

For my third attempt, I wanted to move towards more artistic interpretation, while still using ellipses. I used the estimate data to drive the vertical position, width and height of the ellipse. I used an HSB color mode (so the color groups are no longer accurate to region, but you get a smooth gradient across the screen). I also rendered a small white dot at the center of each ellipse, so if you hold your mouse at the dot, you know the readout will correctly correspond to your mouse position. 

[Link to editor](https://editor.p5js.org/patchbae/sketches/ryCypkruX)

On another go around, I decided to center all of the drawing, and have the data unfold from top to bottom (as opposed as left ro tight). I also used both ellipses and rectangles in this sketch. I got rid of the readout as I couldn't figure out a good way to get it work like this. The estimate is driving width, height and opacity here. The colormode is still HSB, so they do not correspond to groups. 

[Link to editor](https://editor.p5js.org/patchbae/sketches/BkcofgHuX)

And lastly, I did the same thing as the fourth one but reintroduced the color groups. 

[Link to editor](https://editor.p5js.org/patchbae/sketches/HkJ5Flr_7)









