---

 layout: post
 title: "Tonal Gravity"
 category: "Nature of Code"
 
---


For my final project, I wanted to develop an interactive audiovisual environment based around the concepts of particle systems. I also used this project for my Algorithmic Composition final performance, where audience members were given control of the piece. This project was developed with p5.js, node.js, and websockets, using examples from Nature of Code and Interactive Play.

I had initially thought to leverage people's phones to generate sounds, using the accelerometer data to affect the pitch and volume. Each device (playing a sine tone) would be represented visually as a particle (either on a large screen or projected in the room). In addition to using the phone's accelerometer data to direct the pitch and volume, each particle would experience gravity relative to the other particles. The result would be an audiovisual system that tended towards an average equilibrium, but with enough noisey input to be constantly evolving. 

Over the course of trying to develop this system, I ran into a number of obstacles and challenges that caused me to change my initial design plans. The first problem was that the phone speakers were not loud enough, so I decided to use one computer to output the audio and video to the PA and projector, respectively. This meant that both the audio and video data needed to be sent from each input device to the server and then back to the output computer, in as close to real time as possible. The second issue with the audio was a constant clicking during the testing phase. I had first suspected that it was too much data being sent from the accelerometer data, so I switched to mouse / touch input, but the clicks persisted. I eventually found that I was trying to start the sound again every time data was sent from an input device, so moving the start code to a different location solved the clicking. 

I also noticed that the size of the input and output display windows dramatically influenced the performance of the piece. Since the input deviced were mostly phones, that was not an issue, but I had to carefully play with the display size of the output computer so that the program would run smoothly. 

The last main piece that was changed was that, instead of the using directly controlling their particle, they would controller an attractor's position, which would in turn influence their particle. I also scaled down the particle interaction for performance, so that a user's attractor only influence their particle, and the particles did not influence each other. For a later version of this project, I hope tpo be able to streamline it enough so that all the particles / attractors exert influence on one another. I also had the gravity of each user's attractor start very low and increase over time, so that the longer you are a part of a piece, the more force you will exert on your particle. 

After some user testing, I found that just changing the frequency and amplitude of a sine tone got repetitive very quickly. So I made a final alteration and had the particle control the rate and volume of a sound file. And instead of every particle playing the same sound file, they were randomly assigned a soundfile from a group that I had put together. This gave the piece a lot more variation and room for developing differently over time. 

Here is a quick [video](https://www.youtube.com/watch?v=NOpZz9Onoig&feature=youtu.be) of it running.


And here is the [source code](https://github.com/patchbae/patchbae.github.io/tree/master/Tonal%20Gravity).


Code examples used:
[Nature of Code - Particle Systems](https://github.com/shiffman/NOC-S18/tree/master/week4)
[Interactive Play](https://github.com/mimiyin/collective-play-s18)








