---
 layout: post
 title: The Expressifier
 categories: PCOMP
 
---

I had this idea when I was still in my undergraduate program studying Music Technology, but I never actually tried to prototype or build it, so I figured now was a good as time as any to start on it. The initial concept was to take a generic expression pedal and create an interface that would allow for it to control multiple servo motors wirelessly. The servo motors would be housed in such a way as to allow connection to the knobs of a guitar pedal, while simultaneously drawing power from a generic 9V power supply. The units will communicate over an XBee wireless system. The main transmitter unit will house an Arduino, while the receiver units will ideally just use an XBee module. For this class, my aim is to get the controller unit and a single servo and housing working. The controller unit will most likely be housed in a simple enclosure with minimal controls, as I'm anticipating the most difficult part of this being the construction of the housing for the servo unit. Future iterations of this project would feature a more advanced controller unit and various/multiple receiver modules. 

![Circuit Diagram]({{ site.url }}/images/SystemDiamgram.png)

### Bill of Materials:
2 x XBee Modules
1 x XBee Shield
1 x XBee Explorer USB
1 x Arduino UNO
1 x CV Expression Pedal
1 x Servo Motor
1 x Barrel DC Power Connector
1 x 5V regulator
Housing for Controller Unit and Servo Motor

### Timeline
Week 1: Order parts and begin prototyping
Week 2: Establish wireless communication between controller and receiver
Week 3: Build enclosure for controller and receiver
Week 4: Final adjustments / bug fixes





