---

 layout: post
 title: "MKR1000 Thermostat"
 category: "Connected Devices"
 
---

For this assignment, we needed to create a thermostat that posted hourly temperature readings to a server, in addition to having a potentiometer to create a desired temperature set point. I used the Arduino MKR1000 and the TMP36 analog temperature sensor to log and post the temperature to the server.

![Guts]({{ site.url }}/images/CN3-1.png) 

I added a small LCD display to show the current temperature and the desired set point temperature. It also lets you know when you've successfully connected to the network and when you are making a post to the server.

<iframe width="100%" height="200" src="https://www.youtube.com/embed/YkTY6c_r4o4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I used a cardboard box as an enclosure and secured the screen and potentiometer to the face panel. 

![In Box]({{ site.url }}/images/CN3-3.png) 

Here is what it looks like closed. 

![Closed]({{ site.url }}/images/CN4-4.png) 


### Final Remarks

While I did manage to sucessfully post correct measurements, I was having a number of issues with consistently doing so over long stretches of time. I noticed that after a seemingly arbitrary amount of sucessful posts, the device would stop posting sucessfully to the server. A simple power cycle would get it going again, and I'd try making adjustments to the code, but it wasn't until Tuesday that I managed to get significant progress. What I finally did was have it send every five minutes, in addition to reminding itself of the new alarm time after every sucessfull post. This resulted in my longest stretch of sucessful posts (about 22 hours). I also had the device check the HTTP response and if it was anything other than 200, it would reset the WiFi and try to post again. 


### Code


```
{% highlight arduino %}
/*
  Dweet.io POST client for ArduinoHttpClient library
  Connects to dweet.io once every ten seconds,
  sends a POST request and a request body.

  Shows how to use Strings to assemble path and body

  note: WiFi SSID and password are stored in config.h file.
  If it is not present, add a new tab, call it "config.h"
  and add the following variables:
  char ssid[] = "ssid";     //  your network SSID (name)
  char pass[] = "password"; // your network password

  created 15 Feb 2016
  by Tom Igoe

  this example is in the public domain
*/

#include <SPI.h>
#include <ArduinoHttpClient.h>
#include <WiFi101.h>
#include <LiquidCrystal.h>
#include <RTCZero.h>
#include "arduino_secrets.h"

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
/////// Wifi Settings ///////
char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

const char serverAddress[] = "connected-devices-itp.herokuapp.com";  // server address
int port = 443;

WiFiSSLClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;
int statusCode = 0;
String response;

LiquidCrystal lcd (0, 1, 2, 3, 4, 5);

RTCZero rtc;

bool sendRequest = true;

String path;
String contentType;
String postData;
//const int GMT = -4;
unsigned long epoch;
int alarmMin = 45;


void setup() {
  Serial.begin(9600);
  //while (!Serial);
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: "); //this won't print
    Serial.println(ssid);                   // print the network name (SSID);
    lcd.begin(16, 2);
    lcd.setCursor(0, 0); // Lcd first row is 0
    lcd.print("Connecting to:");
    lcd.setCursor(0, 1); // Lcd first row is 0
    lcd.print(ssid);

    // Connect to WPA/WPA2 network:
    status = WiFi.begin(ssid, pass);
  }

  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());
  lcd.clear();
  lcd.setCursor(0, 0); // Lcd first row is 0
  lcd.print("Connected");
  delay(1000);

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  rtc.begin();
  epoch = WiFi.getTime();
  rtc.setEpoch(epoch);
  rtc.setTime(rtc.getHours(), rtc.getMinutes(), rtc.getSeconds());
  //rtc.setDate(day, month, year);

  //rtc.setAlarmTime(0, 0, 0);    //in this way the request is sent every minute at 0 seconds
  rtc.enableAlarm(rtc.MATCH_MMSS);
  //rtc.enableAlarm(rtc.MATCH_SS);

  rtc.attachInterrupt(alarmMatch);
}

void loop() {
  while ( status != WL_CONNECTED) {
    //    Serial.print("Attempting to connect to Network named: ");
    //    Serial.println(ssid);                   // print the network name (SSID);
    lcd.begin(16, 2);
    lcd.setCursor(0, 0); // Lcd first row is 0
    lcd.print("Connecting to:");
    lcd.setCursor(0, 1); // Lcd first row is 0
    lcd.print(ssid);

    // Connect to WPA/WPA2 network:
    status = WiFi.begin(ssid, pass);
  }

  // assemble the path for the POST message:
  // String dweetName = "cheesy-temp-sensor";
  path = "/add";  // "/dweet/for/" + dweetName;
  contentType = "application/json";

  // assemble the body of the POST message:
  int sensorValue = analogRead(A0);
  float voltage = sensorValue *  (3.3 / 1024.0);
  float temperature = (voltage - 0.525) / 0.01;
  delay(2);

  int potValue = analogRead(A1);
  float potVolt = (potValue / 1024.0) * 1000;
  // convert the millivolts to temperature celsius:
  float potTemp = map(potVolt, 0, 1000, 12, 31);
  // String postData = "{\"sensorValue\":\"";

  lcd.clear();
  lcd.setCursor(0, 0); // Lcd first row is 0
  String currentTemp = "Temp: ";
  currentTemp += temperature;
  lcd.print(currentTemp);
  lcd.setCursor(0, 1);
  String setTemp = "Set Temp: ";
  setTemp += potTemp;
  lcd.print(setTemp);


  postData = "{\"macAddress\":\"F8:F0:05:F7:D0:AD\", \"sessionKey\": \"eaeba03b-26c1-409e-a4c7-bd26432a854c\", \
  \"data\": {\"temp\":\"";
  postData += temperature;
  postData += "\", \"setTemp\":\"";
  postData += potTemp;
  postData += "\"}}";
  //Serial.println(postData);

  if (sendRequest) {
    sendRequest = false;
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Sending Request"); //hanging here sometimes and dual posting on start
    httpRequest();
  }
  delay(1000);
}

void httpRequest() {
  sendRequest = false;
  Serial.println("making POST request");
  //Serial.println(sensorValue);
  client.beginRequest();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Posting"); //hanging here sometimes and dual posting on start
  // send the POST request
  client.post(path, contentType, postData);

  // read the status code and body of the response
  statusCode = client.responseStatusCode();
  response = client.responseBody();
  client.stop();
  if (statusCode == 200) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Posted!");
    alarmMin = (alarmMin + 5) % 60;
    rtc.setAlarmTime(0, alarmMin, 0);    //in this way the request is sent every minute at 0 seconds
    Serial.println(alarmMin);
    delay(100);

  }
  else {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Did Not Post!");
    delay(888);
    sendRequest = true;
    WiFi.end();
    delay(10);
    WiFi.begin(ssid, pass);
  }
  Serial.print("Status code: ");
  Serial.println(statusCode);
  Serial.print("Response: ");
  Serial.println(response);

  Serial.println("Wait five minutes\n");
  delay(5);
  //  WiFi.end();
  //  delay(10);
  //  WiFi.begin(ssid, pass);

}

void alarmMatch() {
  sendRequest = true;
}
{% endhighlight %}
```



