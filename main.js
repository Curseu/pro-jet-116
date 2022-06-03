nosex=0;
nosey=0;
function preload(){
clown=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("poseNet is cool!");
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown,nosex,nosey,80,35);
}
function takesnapshot(){
    save('thantos.png')
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x -40;
       nosey=results[0].pose.nose.y  ;
        console.log("nose X = "+nosex);
        console.log("nose y = "+nosey);
    }
}