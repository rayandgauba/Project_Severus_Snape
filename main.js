status = "";


function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(450,350);
    canvas.position(430,280);
}

function draw() {
    image(video,0,0,800,400);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded() {
    console.log("ModelLoaded");
    status = true;
    video.speed(1);
    video.volume(0);
    video.loop();
}