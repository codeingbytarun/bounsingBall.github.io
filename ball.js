const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    speed: 3,
    dx: 0,
    dy: 0
};

// Function to draw the ball
function BallDrow() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FFD700";
    ctx.fill();
    ctx.closePath();
}

// Function to update the canvas
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Draw the ball
    BallDrow();

    // Request animation frame to create animation loop
    requestAnimationFrame(updateCanvas);
}

// Handle mouse click event
canvas.addEventListener("click", (event) => {
    const clickX = event.clientX - canvas.getBoundingClientRect().left;
    const clickY = event.clientY - canvas.getBoundingClientRect().top;

    // Calculate the direction and speed to move the ball towards the click
    const angle = Math.atan2(clickY - ball.y, clickX - ball.x);
    ball.dx = Math.cos(angle) * ball.speed;
    ball.dy = Math.sin(angle) * ball.speed;
});

// Start the animation loop
updateCanvas();