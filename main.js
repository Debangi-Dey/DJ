song = "";
leftWX=0
leftWY=0
rightWX=0
rightWY=0
scoreLW=0
function preload()
{
	song = loadSound("music.mp3");
}



function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	poseN=ml5.poseNet(video, modelLoaded)
	poseN.on('pose', getPose)
}

function getPose(results){
if (results.length>0) {
	console.log(results)
	scoreLW=results[0].pose.keypoints[9].score
	leftWX=results[0].pose.leftWrist.x
	leftWY=results[0].pose.leftWrist.y
	rightWX=results[0].pose.rightWrist.x
	rightWY=results[0].pose.rightWrist.y
}
}
	
function modelLoaded(){
	console.log("model loaded")
} 

function draw() {
	image(video, 0, 0, 600, 500);
fill("red")
stroke("red")
if (scoreLW>0.2){
	circle(leftWX, leftWY, 20)
n1=Number(leftWY)
RD=floor(n1)
volume=RD/500
document.getElementById("volume").innerHTML="volume "+ volume
song.setVolume(volume)
}
}

function play()
{
	song.play();
	song.setVolume(0.5)
	song.rate(1)
}

function stop()
{
	song.stop();
	
}