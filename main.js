function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,350);
    canvas.position(660,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    }
}
function draw(){
    background('#94fc03');
}