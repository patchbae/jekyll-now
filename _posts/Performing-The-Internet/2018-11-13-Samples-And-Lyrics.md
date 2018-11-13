---
 layout: post
 title: "Samples and Lyrics"
 category: "Performing The Internet"
 
---

This is an old track that I was working on with my friend Kile (on vocals), but we never finished it. I really liked his vocal samples on this track, so I chopped them up and assigned them to the top row of keys, and had them to change the text and background image. The text are the lyrics for the current sample, and the background image is related to the lyric. There is a simple piano and bass loop, along with four drum samples, and some additional vocal samples. The vocal samples can be played left to right in the "proper" order, or they can be played in a more freestyle manner. 


```
var hat = document.getElementById("hat");
hat.volume = 0.5;

var ohat = document.getElementById("ohat");
ohat.volume = 0.15;

var clap = document.getElementById("clap");
clap.volume = 0.5;

var kick = document.getElementById("kick");
kick.volume = 0.75;


$(document).keydown(function(e){
  if(e.key == "q"){
    typeText("~I'll let you be the river~", 88)
    playMe(vox1);
    setBgImage("https://media2.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif?cid=3640f6095bc76b266764615045c0cfb5");
    setTextColor("black");
  }
  else if(e.key == "w"){
    typeText("~Coursing through my veins~", 88)
    playMe(vox2);
    setBgImage("https://media.giphy.com/media/YIi7Uzwu1rHm8/giphy.gif");
    setTextColor("white");

  }
  else if(e.key == "e"){
    typeText("~I'll let you flow through me~", 88)
      playMe(vox3);
      setBgImage("https://media.giphy.com/media/8qrmcwwJnW5XaLJQUB/giphy.gif")
      setTextColor("black");
  }

  else if(e.key == "r"){
    typeText("~Until you evaporate~", 88)
    playMe(vox4);
    setBgImage("https://media.giphy.com/media/tdA8U4gahGyJi/giphy.gif");
    setTextColor("white");
  }
  else if(e.key == "t"){
    typeText("~And even when your seas dry up~", 88)
    playMe(vox5);
    setBgImage("https://media.giphy.com/media/v6nV8MaanUYh2/giphy.gif");
    setTextColor("black");
  }
  else if(e.key == "y"){
    typeText("~And all the skies turn to grey~", 88)
    playMe(vox6);
    setBgImage("https://media.giphy.com/media/7Fg6X64Tp4zfRKQd5b/giphy.gif");
    setTextColor("black");
  }
  else if(e.key == "u"){
    typeText("~I know that you'll come back to me~", 88)
    playMe(vox7);
    setBgImage("https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif");
  }
  else if(e.key == "i"){
    typeText("~On another rainy day~", 60)
    playMe(vox8);
    setBgImage("https://media.giphy.com/media/2ZqbXcaHnfqGQhwX6Zq/giphy.gif");
    setTextColor("white");
  }

  else if(e.key == "o"){
    typeText("~oooooooooooo~", 88)
    playMe(ooo);
    setBgImage("https://media.giphy.com/media/3nOkT3MgkHvpe/giphy.gif");
    setTextColor("red");
    }

  else if(e.key == "p"){
    typeText("~yeaaaahh yeah~", 88)
    playMe(yeah);
    setBgImage("https://media.giphy.com/media/3owyp4lrgQjqeLe0hy/giphy.gif");
    setTextColor("red");
  }

  else if(e.key == "m"){
    playMe(piano);
  }

  else if(e.key == "h"){
    playMe(lick1);
  }

  else if(e.key == "j"){
    playMe(lick2);
  }

  else if(e.key == "k"){
    playMe(lick3);
  }

  else if(e.key == "a"){
    if (kick.ended){kick.currentTime = 0};
    if (kick.currentTime > 0){
        kick.currentTime = 0
    } else {
        kick.play()
    }
  }

  else if(e.key == "s"){
    playMe(clap);
  }

  else if(e.key == "d"){
    playMe(ohat);
  }

  else if(e.key == "f"){
    if (hat.ended){hat.currentTime = 0};
    if (hat.currentTime > 0){
        hat.currentTime = 0
    } else {
        hat.play()
    }
  }

  else if(e.key == "b"){
    if (bass.ended){bass.currentTime = 0};
    if (bass.currentTime > 0){
        bass.currentTime = 0
    } else {
        bass.play()
    }
  }


})

//show multiple lines of text
function showText (text){
    $('#textDiv').append("<h1>"+text+"</h1>");
    //scrolls to the bottom
    $('#bottom')[0].scrollIntoView(false);
}

function playMe (sid){
  if (sid.ended){sid.currentTime = 0};
  if (sid.currentTime > 0){
      sid.currentTime = 0
  } else {
      sid.play()
  }
}

//replace the same text with new text
function showText2 (text){
    if($('#mainText').length == 0){
        $('#textDiv').append("<h1 id='mainText'>"+text+"</h1>");
    }
    else {
        $('#mainText').text(text);
    }
}
function typeText2(string, speed) {
    var c = 0;
    $('#textDiv').append('<h1></h1>');
    var dest = $('h1:last')[0];
    var i = setInterval(function () { //basically a while loop with a delay between each iteration
        if (c >= string.length) {
            $(dest).html(string);
            clearInterval(i);
        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
        }
    }, speed); //this is the delay in milliseconds between each character, increase to slow down, decrease to speed up
};
function typeText(string, speed) {
    var c = 0;
    var dest = $('#mainText')[0];
    var i = setInterval(function () { //basically a while loop with a delay between each iteration
        if (c >= string.length) {
            $(dest).html(string);
            clearInterval(i);
        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
        }
    }, speed); //this is the delay in milliseconds between each character, increase to slow down, decrease to speed up
};
//sounds overlap one another
function playSound (id) {
    var sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
//one sound at a time
var playSound2 = function(id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    });
    sound = $("#" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }

}
function setBgImage(fileName){
    $("html").css('background-image', 'url('+fileName+')');
}
function setTextColor(color){
    $('html').css('color', color)
}

```
