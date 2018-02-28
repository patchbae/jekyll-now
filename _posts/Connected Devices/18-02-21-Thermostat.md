---

 layout: post
 title: "MKR1000 Thermostat"
 category: "Connected Devices"
 
---

For this assignment, we needed to create a thermostat that posted hourly temperature readings to a server, in addition to having a potentiometer to create a desired temperature set point. I used the Arduino MKR1000 and the TMP36 analog temperature sensor to log and post the temperature to the server.

![Guts]({{ site.url }}/images/CN3-1.png) 

I added a small LCD display to show the current temperature and the desired set point temperature. It also lets you know when you've successfully connected to the network and when you are making a post to the server.

<iframe width="480" height="200" src="https://www.youtube.com/embed/YkTY6c_r4o4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I used a cardboard box as an enclosure and secured the screen and potentiometer to the face panel. 

![In Box]({{ site.url }}/images/CN3-3.png) 

Here is what it looks like closed. 

![Closed]({{ site.url }}/images/CN4-4.png) 


### Final Remarks

While I did manage to sucessfully post correct measurements, I was having a number of issues with consistently doing so over long stretches of time. I noticed that after a seemingly arbitrary amount of sucessful posts, the device would stop posting sucessfully to the server. A simple power cycle would get it going again, and I'd try making adjustments to the code, but it wasn't until Tuesday that I managed to get significant progress. What I finally did was have it send every five minutes, in addition to reminding itself of the new alarm time after every sucessfull post. This resulted in my longest stretch of sucessful posts (about 22 hours). I also had the device check the HTTP response and if it was anything other than 200, it would reset the WiFi and try to post again. 
