const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");

//패들 변수
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight;
// 공 변수
const ballRadius = 10;
let x = canvas1.width / 2;
let y = canvas1.height - 30;
let dx = 2;
let dy = -2;

let rightPressed = false;
let leftPressed = false;

// 공 그리기 함수
function drawBall() {
	ctx.beginPath();
  	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
 	ctx.closePath();
}
// 패들 그리기 함수
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// 게임 전체 최신화 함수
function draw() {
	ctx.clearRect(0, 0, canvas1.width, canvas1.height);
	drawBall();
	drawPaddle();
	x += dx;
	y += dy;
	if(x + dx < ballRadius || x + dx > canvas1.width - ballRadius) {
		dx = -dx;
	}
	if(y + dy < ballRadius || y + dy > canvas1.height - ballRadius) {
		dy = -dy;
	}
	
	if (rightPressed) {
 		paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
	} else if (leftPressed) {
 		paddleX = Math.max(paddleX - 7, 0);
	}
}
// 게임 시작 함수
function startGame() {
  	const interval = setInterval(draw, 10);
}

// 게임 시작 버튼 구현
document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	}
	else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key === "Right" || e.key === "ArrowLeft") {
		rightPressed = false;
	}
	else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}