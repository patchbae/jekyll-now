---
 layout: post
 title: Tinny Trumpet
 categories: PCOMP
 
---

My main instrument has always been bass, but I've always wanted to play trumpet. I once managed to get my hands on a trumpet for a few months, much to my roomates' dismay, but I have a trumpet no more. So I hacked one together using some buttons, aluminum cans, a small omni microphone, and our trusty Arduino. 

Instead of going with standard trumpet figuring, I devised my own six-button scheme: 4 note-buttons and 2 octave-buttons. The first three note-buttons act very much like a binary counter, giving you access to the 7 diatonic notes of a major scale. The fourth note-button sharpens whatever note is currently being played, so you have access to the full chromatic scale. The octave buttons momentarily shift the octave up or down. 

The initial model did not incorporate breath control, and the note simply sounded as soon as it was pressed. Here is a [video](https://www.youtube.com/watch?v=YZwOD4DRv5s&feature=youtu.be) of it on the breadboard:

I decided to try and add some breath control, but this proved to be more difficult than I expected. I used some of the Arduino sample code to collect an average value for the microphone, and then based my readings off of that. The main issue I was experiencing was that the valuse seemed to wrap around back to zero (I'm assuming since the microphone creates an AC signal, the readings were centered around zero). I managed to get a fairly decent signal, but since I did not use an op amp to amplify the microphone, you need to blow fairly hard. All in all, I got a decenly working prototype done using minimal components. Here is the final circuit diagram and a [video](https://www.youtube.com/watch?v=eM0aXAJYJiQ&feature=youtu.be) demo of the instrument:


![Circuit Diagram]({{ site.url }}/images/Trumpet V3.png)
