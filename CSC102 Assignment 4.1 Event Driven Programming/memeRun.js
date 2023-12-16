
// memeRun.js
// MemeImage is the image to be animated
// StartButton is the button to start the animation
// StopButton is the button to stop the animation
// by Akil Bonner 2023 

//const  image = document.getElementById("memeImage");
// memeRun.js

let moveInterval = 0;
//const startButton = document.getElementById("startButton");
//const stopButton = document.getElementById("stopButton");
//const memeImage = document.getElementById("memeImage");

function startAnimation() {
    const memeImage = document.getElementById("memeImage");
    moveInterval = setInterval(moveMeme, 50);
    startButton.disabled = true;
    stopButton.disabled = false;
let pos = 0;
clearInterval(frame, 5);
moveMeme = setInterval(frame, 5); // draw every 5ms

function frame() {
    if (pos == 350) {
        clearInterval(frame);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

}

function stopAnimation() {
    clearInterval(moveInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}
// moves the image to the right by 5 pixels every 50 milliseconds
function moveMeme() {
    let currentLeft = parseInt(window.getComputedStyle(memeImage).left, 10);
    memeImage.style.left = (currentLeft + 5) + 'px'; // Move right by 5px
}

function openCatalog() {
    window.open('https://www.uat.edu/media/UAT_Catalog_2023_V2.pdf', '_blank');
}

// Initialize the left position of the image
memeImage.style.left = '0px';

// Bind click events to buttons
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
catalogButton.addEventListener("click", openCatalog);












    

/*

function sound(src)
{ // creating a brand new component
    this.sound = document.createElement("audio"); // creating a new audio element
    this.sound.src = src; // setting the source of the audio element to the source of the sound file
    this.sound.setAttribute("preload", "auto"); // preload the audio file
    this.sound.setAttribute("controls", "none"); // do not display the audio controls
    this.sound.style.display = "none"; // do not display the audio element
    document.body.appendChild(this.sound); // add the audio element to the body of the HTML document
    this.play = function()
    { // function to play the audio file
        this.sound.play(); // play the audio file
    }
    this.stop = function()
    { // function to stop the audio file
        this.sound.pause(); // pause the audio file
    //    this.sound.currentTime = 0; // reset the audio file to the beginning  } */// Path: memeRun.js*
    //////////////////////////////*/



