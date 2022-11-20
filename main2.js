function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(video);
	video.size(1000,300);
    video.hide();
	poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
	console.log("Model is Initialized");
}
function draw(){
    Image(0,0,1240,336);
}