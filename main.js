noseX = 0;
noseY = 0;
difference = 210;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#acaeb5');
    fill('#FF0000');
    stroke('#FF0000');
    square(noseX, noseY, difference);

    document.getElementById("square_side").innerHTML = " Width and Height of the Square will be " + difference + " px";
}

function modelLoaded() {
    console.log('PoseNet is initaliazed!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('nose x = ' + noseX + ' nose y = ' + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}