
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
video = createCapture(VIDEO);
video.size(500,450);

canvas = createCanvas(550, 400);
canvas.position(700, 185);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){

    console.log("PoseNet is Initialized");

}

function draw() {

    background('#ADD8E6');

    fill('#F90093');
    textSize(difference);
    text('Abhayae', 255, 200);
    document.getElementById("font").innerHTML = "Font Size = "+ difference + "px";
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
   
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
}


}