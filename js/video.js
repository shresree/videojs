var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var slow = document.querySelector("#slower");
var fast = document.querySelector("#faster");
var skip = document.querySelector("#skip");
var mute = document.querySelector("#mute");
var slider = document.querySelector("#slider");
var vintage = document.querySelector("#vintage");
var orig = document.querySelector("#orig");
document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate);
	video.slow();
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate += 0.1;
    console.log("New Speed: " + video.playbackRate);
	video.fast();
});

document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Time: " + video.currentTime);
	video.skip();
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
	video.mute();
});

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = (this.value / 100.0);
	document.querySelector("#volume").innerHTML = ((video.volume * 100.0) + "%");
	video.slider();
});
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	video.vintage();
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	video.original();
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	updateVolume();
 });

