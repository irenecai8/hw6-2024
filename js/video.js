var video;

//1
window.addEventListener("load", function(){
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	console.log(video);


	video.autoplay = false;
	video.loop = false;
});

//2
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");

	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();

})


//3
document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video");
	video.pause();
})

//4
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.9;

	console.log("video playback rate" + video.playbackRate)
})

//5
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up");
	video.playbackRate /= 0.9;

	console.log("video playback rate" + video.playbackRate);
})

//6 
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime+10 > video.duration) {
		console.log("resetted to the start");
		video.currentTime = 0;
	}

	else {
		console.log("Skipped ahead 10 seconds");
		video.currentTime += 10;
	}

	console.log(video.currentTime);
})

//7
document.querySelector("#mute").addEventListener("click", function(){
	console.log("video mute");
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
	}

	else {
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	video.muted =! video.muted;
	console.log("Video is muted: " + video.muted);
})

//8
document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("volume change");

})

//9
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("style change");
})

//10
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("back to original");
	
})