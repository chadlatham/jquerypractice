$(document).ready(function() {
    console.log("test jQuery");

    var audio = document.getElementById('opening-audio');
    audio.play();
    setTimeout(function(){audio.pause();},20000); //10000 milli-seconds of audio

    // var music = new Sound("../assets/The Wretched.mp3", 100, false);
    // music.start();
    console.log(document);
    console.log(window);
});

document.addEventListener("mouseover",function(e) {
    console.log(e);
});

function Sound(source,volume,loop) {
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function() {
        document.body.removeChild(this.son);
    }

    this.start=function() {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }

    this.remove=function() {
        document.body.removeChild(this.son);
        this.finish=true;
    }

    this.init=function(volume,loop) {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}


//var song = New Audio("assets/The Wretched.mp3");

// //Name the audio file
// var fileName = "assets/The Wretched";
//
// //Create the audio tag
// var soundFile = document.createElement("audio");
// soundFile.preload = "auto";
//
// //Load the sound file (using a source element for expandability)
// var src = document.createElement("source");
// src.src = fileName + ".mp3";
// soundFile.appendChild(src);
//
// //Load the audio tag
// //It auto plays as a fallback
// soundFile.load();
// soundFile.volume = 1.0;
// soundFile.play();
//
// //Plays the sound
// function play() {
//    //Set the current time for the audio file to the beginning
//    soundFile.currentTime = 0.01;
//    soundFile.volume = volume;
//
//    //Due to a bug in Firefox, the audio needs to be played after a delay
//    setTimeout(function(){soundFile.play();},1);
// }
