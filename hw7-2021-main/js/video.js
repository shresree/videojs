var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
window.addEventListener("load", function() {
    
    video = document.querySelector("#player1"); 

    
    if (video) {
        
        video.autoplay = false;
        
      
        video.loop = false;
    } else {
        console.error("Video element not found");
    }
});
 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });

