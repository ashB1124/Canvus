const ctx = document.getElementById("canvas1").getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgb(0 0 255 / 50%)";
// ctx.stroke();
// ctx.closePath();

const ballRadius = 10;
let x = canvas1.width / 2;
let y = canvas1.height - 30;
let dx = 2;
let dy = -2;
let colorCode = 0;


function drawBall() {
	ctx.beginPath();
  	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	if(colorCode == 0){
		ctx.fillStyle = "#0095DD";
	} 
	if(colorCode == 2) {
		ctx.fillStyle = "red";
	}
	
	ctx.fill();
 	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas1.width, canvas1.height);
	drawBall();
	x += dx;
	y += dy;
	if(x + dx < ballRadius || x + dx > canvas1.width - ballRadius) {
		dx = -dx;
	}
	if(y + dy < ballRadius || y + dy > canvas1.height - ballRadius) {
		dy = -dy;
		colorCode = 0;
	}
}

function startGame() {
  const interval = setInterval(draw, 10);
}

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});