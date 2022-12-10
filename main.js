function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
mario_gameOver = loadSound("gameover.wav");
mario_died = loadSound("mariodie.wav")
mario_kick = loadSound("kick.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotposes);
	
}
function modelLoaded(){
	console.log("modelLoaded");

}

function draw() {
	game();
	
}	

function gotposes(results){
if(results.length>0){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	
}

}






