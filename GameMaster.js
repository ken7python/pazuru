var kekka;
var i = 0;

var music = new Audio('src/BGM.mp3');

var g = false;

function start() {
    StartButton.style.display ="none";
    //recognition.start();
    music.pause();
    music.loop = true;
    music.volume = 1;
    music.play();
    g = true;

}