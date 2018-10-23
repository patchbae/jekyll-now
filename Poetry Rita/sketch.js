var lines;
var counts;
var fillCLR;
var font;
var bodyAndSoul;
var bodyAndSoulColor;
var actions;
var actionsColor;
var ofNatureNotLiving;
var ofNatureNotLivingColor;
var ofNatureLiving;
var ofNatureLivingColor;
var ofMan;
var ofManColor;
var ofTimes;
var ofTimesColor;
var ofStates;
var ofStatesColor;
var ofPlaces;
var ofPlacesColor;
var ofIntimacy;
var ofIntimacyColor;
var ofSight;
var ofSightColor;
var ofSound;
var ofSoundColor;
var ofTaste;
var ofTasteColor;
var ofLifeAndDeath;
var ofLifeAndDeathColor;
var ofDualNatures;
var ofDualNaturesColor;


function preload() {
  lines = loadStrings('Neruda_Simple.txt');
}

function setup() {
  bodyAndSoulColor = color(255, 255, 255);
  bodyAndSoul = createButton("Of Body And Soul");
  bodyAndSoul.mousePressed(setBodyAndSoul);

  actionsColor = color(255, 255, 255);
  actions = createButton("Of Actions");
  actions.mousePressed(setAction);

  ofNatureNotLivingColor = color(255, 255, 255);
  ofNatureNotLiving= createButton("Of Nature, Not Living");
  ofNatureNotLiving.mousePressed(setOfNatureNotLiving);

  ofNatureLivingColor = color(255, 255, 255);
  ofNatureLiving= createButton("Of Nature, Living");
  ofNatureLiving.mousePressed(setOfNatureLiving);

  ofManColor = color(255, 255, 255);
  ofMan= createButton("Of Human");
  ofMan.mousePressed(setOfMan);

  ofTimesColor = color(255, 255, 255);
  ofTimes= createButton("Of Times");
  ofTimes.mousePressed(setOfTimes);

  ofStatesColor = color(255, 255, 255);
  ofStates= createButton("Of States and Feelings");
  ofStates.mousePressed(setOfStates);

  ofPlacesColor = color(255, 255, 255);
  ofPlaces= createButton("Of Places, Movements, Time, and Distance");
  ofPlaces.mousePressed(setOfPlaces);

  ofIntimacyColor = color(255, 255, 255);
  ofIntimacy= createButton("Of Intimacy");
  ofIntimacy.mousePressed(setOfIntimacy);

  ofSightColor = color(255, 255, 255);
  ofSight= createButton("Of Sight");
  ofSight.mousePressed(setOfSight);

  ofSoundColor = color(255, 255, 255);
  ofSound= createButton("Of Sound");
  ofSound.mousePressed(setOfSound);

  ofTasteColor = color(255, 255, 255);
  ofTaste= createButton("Of Taste");
  ofTaste.mousePressed(setOfTaste);

  ofLifeAndDeathColor = color(255, 255, 255);
  ofLifeAndDeath= createButton("Of Life And Death");
  ofLifeAndDeath.mousePressed(setOfLifeAndDeath);

  ofDualNaturesColor = color(255, 255, 255);
  ofDualNatures= createButton("Of Dual Natures");
  ofDualNatures.mousePressed(setOfDualNatures);


  colorMode(RGB, 255);
  createCanvas(windowWidth, 2330);
  // join lines so we have a string, not an array
  // of strings!
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "), params);

  // set drawing parameters
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  noLoop();
}


function colorSort(val) {
  switch (val) {

    //of body and soul
    case "2":
    case "11":
    case "18":
    case "20":
    case "23":
    case "24":
    case "25":
    case "30":
    case "47":
    case "73":
    case "75":
    case "111":
    case "117":
    case "147":
    case "159":
    case "192":
    case "200":
    case "209":
    case "227":
      fillCLR = color(bodyAndSoulColor);
      // fillCLR = color(255, 0, 255);
      break;

    //of actions
    case "9":
    case "19":
    case "33":
    case "72":
    case "87":
    case "88":
    case "112":
    case "136":
    case "100":
    case "118":
    case "139":
    case "142":
    case "157":
    case "175":
    case "199":
      fillCLR = color(actionsColor);
      // fillCLR = color(255, 0, 128);
      break;

      //of nature, not living
    case "3":
    case "5":
    case "10":
    case "17":
    case "28":
    case "32":
    case "36":
    case "37":
    case "38":
    case "51":
    case "57":
    case "102":
    case "106":
    case "109":
    case "114":
    case "120":
    case "129":
    case "138":
    case "148":
    case "152":
    case "177":
    case "201":
    case "216":
    case "220":
    fillCLR = color(ofNatureNotLivingColor);
      // fillCLR = color(0, 255, 255);
      break;

      //of nature, living
    case "26":
    case "41":
    case "43":
    case "53":
    case "79":
    case "90":
    case "94":
    case "96":
    case "103":
    case "107":
    case "124":
    case "126":
    case "134":
    case "154":
    case "163":
    case "167":
    case "168":
    case "178":
    case "182":
    case "183":
    case "191":
    case "193":
    case "226":
    case "228":
      fillCLR = color(ofNatureLivingColor);
      break;

    //man made
    case "65":
    case "78":
    case "110":
    case "151":
    case "164":
    case "188":
    case "206":
    case "214":
      fillCLR = color(ofManColor);
      break;

      //of times
    case "1":
    case "12":
    case "21":
    case "48":
    case "54":
    case "56":
    case "105":
    case "108":
    case "121":
    case "125":
    case "127":
    case "132":
    case "135":
    case "141":
    case "153":
    case "161":
    case "170":
    case "176":
    case "215":
    case "219":
    case "229":
      fillCLR = color(ofTimesColor);
      break;

      //of states and feelings
    case "6":
    case "16":
    case "31":
    case "40":
    case "59":
    case "60":
    case "62":
    case "64":
    case "69":
    case "71":
    case "85":
    case "86":
    case "97":
    case "101":
    case "115":
    case "119":
    case "144":
    case "160":
    case "166":
    case "180":
    case "185":
    case "190":
    case "194":
    case "197":
    case "205":
    case "211":
    case "221":
    case "223":
    case "230":
      fillCLR = color(ofStatesColor);
      break;

      //of places, movement, size, and distance
    case "7":
    case "8":
    case "14":
    case "15":
    case "46":
    case "66":
    case "68":
    case "74":
    case "76":
    case "77":
    case "81":
    case "84":
    case "104":
    case "113":
    case "133":
    case "137":
    case "140":
    case "145":
    case "150":
    case "169":
    case "171":
    case "172":
    case "173":
    case "187":
    case "195":
    case "198":
    case "203":
    case "207":
    case "212":
    case "213":
    case "217":
    case "225":
      fillCLR = color(ofPlacesColor);
      break;

      //of intimacy
    case "0":
    case "42":
    case "49":
    case "70":
    case "80":
    case "82":
    case "91":
    case "158":
      fillCLR = color(ofIntimacyColor);
      break;

      //of sight
    case "4":
    case "29":
    case "35":
    case "45":
    case "52":
    case "61":
    case "67":
    case "92":
    case "95":
    case "116":
    case "122":
    case "123":
    case "128":
    case "149":
    case "162":
    case "184":
    case "222":
    case "224":
      fillCLR = color(ofSightColor);
      break;

      //of sound
    case "27":
    case "39":
    case "89":
    case "93":
    case "146":
    case "155":
    case "156":
    case "179":
    case "181":
    case "186":
    case "204":
    case "208":
      fillCLR = color(ofSoundColor);
      break;

      //of taste
    case "55":
    case "58":
    case "63":
    case "174":
    case "189":
    case "202":
    case "210":
      font = 'Georgia';
      fillCLR = color(ofTasteColor);
      break;

    //of life and death
    case "13":
    case "22":
    case "34":
    case "83":
    case "131":
    case "143":
    case "218":
      fillCLR = color(ofLifeAndDeathColor);
      break;

      //of dual natures
    case "44":
    case "50":
    case "98":
    case "99":
    case "130":
    case "165":
    case "196":
      fillCLR = color(ofDualNaturesColor);
      break;


    default:
      fillCLR = color(255, 255, 255);

  }
}

function setBodyAndSoul(){
  bodyAndSoulColor = color(255, 0, 255);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setAction(){
  actionsColor = color(255, 0, 128);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfNatureNotLiving(){
  ofNatureNotLivingColor = color(0, 255, 255);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfNatureLiving(){
  ofNatureLivingColor = color(0, 255, 0);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfMan(){
  ofManColor = color(25, 255, 128);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfTimes(){
  ofTimesColor = color(255, 255, 0);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfStates(){
  ofStatesColor = color(255, 0, 0);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfPlaces(){
  ofPlacesColor = color(0, 128, 128
);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfIntimacy(){
  ofIntimacyColor = color(255, 105, 180);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfSight(){
  ofSightColor = color(255, 128, 0);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfSound(){
  ofSoundColor = color(255, 64, 64);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfTaste(){
  ofTasteColor = color(164, 128, 255);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfLifeAndDeath(){
  ofLifeAndDeathColor = color(188, 188, 150);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}

function setOfDualNatures(){
  ofDualNaturesColor = color(88, 88, 88);
  clear();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(0);
  draw();
}










function draw() {
  var items = Object.keys(counts).map(function(key) {
    return [key, counts[key]];
  });

  // Sort the array based on the second element
  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  // for (var k in counts) {
  //   if (counts.hasOwnProperty(k)) {
  //     fill(255);
  //     textSize(10);
  //     text("lulz", width/2, 10);
  //   }
  // }
  // createP('{"Top Words":[');
  var posx = 80;
  var posy = 20;
  textSize(15);
  console.log("Drawing!");

  for (i in items) {
    if (items[i][1] >= 10) {
      // var mapped = map(items[i][1], 8, 172, 10, 100);
      // textSize(mapped);
      // print(mapped);
      colorSort(i);
      fill(fillCLR);
      // text(items[i][0], posx, posy);
      // text(i + " : " + items[i][0], posx, posy);
      text(items[i][0] + " : " + items[i][1], posx, posy);
      // text(i + " : " + items[i][0] + " : " + items[i][1], posx, posy);
      posx = posx + 150;
      if (posx > windowWidth / 1.05) {
        posx = 80,
          posy = posy + 40;
        // text(items[i], width/2, ((i)*10+10));
        // print(items[i][1]);
        // createP('{ "word":"' + items[i][0] + '", "count":"' + items[i][1] + '"},');
      }
    }
  }
  // createP(']}')
}
