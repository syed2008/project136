status = "";
function preload(){
    video = createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center(); 
    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
}