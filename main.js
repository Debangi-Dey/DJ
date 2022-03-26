song = "";
leftWX=0
leftWY=0
rightWX=0
rightWY=0

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