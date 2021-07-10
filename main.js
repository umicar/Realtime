noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup() {
    img = createCapture(VIDEO);
    img.size(500, 500);
    canvas = createCanvas(500, 500);
    poseNet = ml5.poseNet(img, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX + "difference = " + difference);
    }
}
function draw() {

    background("#f7d2f1");
    document.getElementById("nosexy").innerHTML = "noseX = " + noseX + "noseY = " + noseY;

    document.getElementById("square_sides").innerHTML = "Width and Height of the square = " + difference + "px";

    fill("#fce805");
    stroke("#e63c29");
    square(noseX, noseY, difference);
}