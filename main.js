function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 450);
    canvas.position(560, 120);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotresults);
}
function draw(){
    background("grey");
    document.getElementById("square_sides").innerHTML="Width and Height of the square will be ="+difference+"px";
    fill('#FFA500');
    stroke('#FFA500');
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log("model loaded!");
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function gotresults(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY"+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);

    }
}