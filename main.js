
function preload() {
}

function setup() {
canvas = createCanvas(648, 488);
canvas.position (110, 250); 
video = createCapture (VIDEO);
video.hide();

tint_color="gold";
}
function draw() {
image(video, 8, 8, 640, 480);
tint(tint_color);
}

function take_snapshot(){
save('sanaa.png');
}