// Add js here.

var video = document.getElementById("videoplayer");
video.autoplay = false;
video.loop = false;
video.load();

var buttonPlay = document.getElementById("play");
var buttonPause = document.getElementById("pause");
var buttonFaster = document.getElementById("faster");
var buttonSlower = document.getElementById("slower");
var buttonMute = document.getElementById("mute");
var output = document.getElementById("volume");
var buttonSkip = document.getElementById("skip");




buttonPlay.addEventListener("click", playVideo);
buttonPause.addEventListener("click", pauseVideo);
buttonFaster.addEventListener("click", fasterVideo);
buttonMute.addEventListener("click", muteVideo);
buttonSlower.addEventListener("click", slowerVideo);
slider.addEventListener("change", adjustVolume)
buttonSkip.addEventListener("click", skipVideo);


function playVideo() {
    video.play()
}

function pauseVideo() {
    video.pause()
}

function muteVideo() {
    if (video.muted) {
        buttonMute.innerHTML = "Mute";
        output.innerHTML = video.volume * 100 + "%";
        slider.value = video.volume * 100;
    }
    else {
        buttonMute.innerHTML = "Unmute";
        slider.value = 0;
        output.innerHTML = "0%"
    }
    video.muted = !video.muted;
}

function adjustVolume() {
    output.innerHTML = slider.value + "%";
    video.volume = slider.value / 100;
}

function skipVideo() {
    video.currentTime = video.currentTime + 15;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
}

function fasterVideo() {
    video.playbackRate *= 2;
    if (video.playbackRate > 2) {
        alert("Video is at fastest speed!");
        // alert(video.playBackRate);
        video.playbackRate = 2;
    }
    
}

function slowerVideo() {
    video.playbackRate /= 2.0;
    if (video.playbackRate < 0.5) {
        alert("Video is at slowest speed!");
        // alert(video.playBackRate);
        video.playbackRate = 0.5;
    }
}



