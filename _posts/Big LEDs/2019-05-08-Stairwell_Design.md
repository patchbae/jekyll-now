---
 layout: post
 title: "Stairwell Design"
 category: "Big LEDs"
 
---

"Create an LED installation for a stairwell that enters down into an event. The ‘visual priority’ is the entrance down the stairs, not the exit up the stairs."

For this installation design, I wanted to use a series of LED archways to create the appearance of a tunnel going down from the street-level entrance into the event. 

A total of eight (8) archways would be used. Each archway has an arc length of 9' and will have (180) 12V WS2811 RGB pixel tape. There will be a total of 72' of LED tape. 

Custom channel strips will be constructed out of aluminum, with the LEDs on the bottom of the archway. Diffusion will be used. 

![Rough Sketch]({{ site.url }}/images/BIGLEDs_Stairs.png)

The three main colors (red, cyan, purple) will slowly fade from the top of the stairs to the bottom. 

A break beam sensor will be placed a few steps before each archway. When the beam is broken, the subsequent archway will turn from its current color to white, with a center-out animation. An Arduino Uno will be used as a microcontroller and will send data to the control computer. 

![Plan View]({{ site.url }}/images/BIGLEDs_Plan_View.png) | width=80

![Section View]({{ site.url }}/images/BIGLEDs_Section_View.png)| width=80


Current Draw per Archway: 0.06A x 180 = 10.8A
Power Consumption per Archway: 10.8A x 12V = 129.6W

Total Current Draw: 10.8A x 8 = 86.4A
Total Power Consumption: 86.4A x 12V = 1036.8W


Four (4) Meanwell 12V power supplies (LRS-350-12) will be used. They are rated at 29A and 348W.
There will be one (1) LRS-350-12 for every two archways. 14AWG wire will be used. 

A computer running Madmapper will output Art-Net to a 12V-24V DMX King LEDmx Pro 4, which is the LED tape controller.  The computer will also be running Arduino, which will monitor for breaks in the beam and send the apprpriate triggers to Madmapper via OSC. 


##Budget:

25m (82') of 12V RGB Pixel Tape: $20 / meter = $500
9 x Custom Aluminum Channels with Diffusion = $2000
5 x Meanwell 12V Power Supplies (LRS-350-12): $42/each = $210
2 x DMX King LEDmx Pro 4: $150/each = $300
2 x Arduino UNO Microcontrollers: $25/each = $50
1000' feet of 14AWG wire: $0.50 per foot = $500
1 x Macbook Pro = $2500
Setup and Installation = $2500
Cartage: $500
Tax @ 0.08% = $724.80

Total = $9,784.80

