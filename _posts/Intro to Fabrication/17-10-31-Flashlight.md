---
 layout: post
 title: Flashlight
 categories: Intro_to_Fabrication
 
---

I've been trying to use as many recycled or scrap parts in my projects. Before we met last week, I had salvaged two pieces of plywood and a piece of aluminum tubing from the junk shelf. I wanted to practice on the bandsaw and scroll saw, so I used the bandsaw to cut the plywood into two discs. Then I drilled a starter hole in the center of each disc and used the scroll saw to cut a circle that the aluminum tubing could fit in. I cut the holes slightly too large, so I used tape to increase the the thickness of the piping. Unfortunately, I didn't get any documentation of this as I wasn't expecting to necessarily use those pieces in a project, but once I'd assembled the pieces and we met for class, I realized I could use the body for the flashlight.
 
![Lamp Body]({{ site.url }}/images/Lamp Body.JPG) 

![One Strip]({{ site.url }}/images/OneStrip.png)

Instead of making a traditional flashlight, I wanted to experiment with the idea of creating an LED hourglass. I had originally thought of using an accelerometer, but simplified it to a tilt switch. My original idea was to have the light resting on the bottom of the lamp until it was flipped over, then the light would slowly start moving from the top of the lamp down to the bottom. I was having some issues with the code for this, in that I couldn't get it to respond as immediately as I would have liked, so I simplified the interaction. Here's a GIF of the pixel animation test and the tilt test. 

<iframe src="https://giphy.com/embed/xT1TU11KnbURA6jWr6" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/xT1TU11KnbURA6jWr6">via GIPHY</a></p>

<iframe src="https://giphy.com/embed/26vaIVaNLWq5LVbjO" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/26vaIVaNLWq5LVbjO">via GIPHY</a></p>

Once I got the pixel animation and the tilt switch working, I soldered the tilt switch and some other components to a perfboard, then mounted the second LED strip, Arduino, and power supply to the inside of the discs.  I finalized the color scheme as red and blue, and had the animation only change to the new one once it had finished the previous cycle. 

![Tilt Switch]({{ site.url }}/images/TiltSwitch.PNG) 


<iframe src="https://giphy.com/embed/3ohnEwtFA6FY0MoS9W" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/3ohnEwtFA6FY0MoS9W">via GIPHY</a></p>
