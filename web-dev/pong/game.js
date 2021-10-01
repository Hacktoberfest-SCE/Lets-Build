const canvas = document.getElementById('pong');
const pen = canvas.getContext("2d");

const player = {
    x: 30,
    y: canvas.height/2 - 100/2,
    width: 10,
    height:100,
    color: "rgb(255, 102, 0)",
    score: 0,

}
const com = {
    x: canvas.width - 30,
    y: canvas.height/2 - 100/2,
    width: 10,
    height:100,
    color: "rgb(255, 102, 0)",
    score: 0,

}
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    veloX: 5,
    veloY: 5,
    color: "rgb(255, 102, 0)",
}
function dreci(x, y, w, h) {

    pen.fillRect(x, y, w, h);
}
function drect(x, y, w, h, color) {
    pen.fillStyle = color;
    pen.fillRect(x, y, w, h);
}
const net = {
    x: canvas.width/2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: "orange"
}
function dnet() {
    for (let i = 0; i < canvas.height; i += 20) {
        drect(net.x, net.y+i, net.width, net.height, net.color);
    }
}


function circle(x, y, r, color) {
    pen.fillStyle = color;
    pen.beginPath();
    pen.arc(x, y, r, 0, Math.PI * 2, false);
    pen.closePath();
    pen.fill();
}


function text(text, x, y, color) {
    pen.fillStyle = color;
    pen.font = "35px italic";
    pen.fillText(text, x, y);
}

function render() {
    drect(0, 0, canvas.width, canvas.height,"rgb(255, 255, 153)");

    dnet();
    text("Pranav "+player.score, canvas.width / 6, canvas.height / 5, "orange");
    text("computer "+com.score, 4 * canvas.width / 6, canvas.height / 5, "orange");
    drect(player.x, player.y, player.width, player.height, player.color);
    drect(com.x, com.y, com.width, com.height, com.color);
    circle(ball.x, ball.y, ball.radius, ball.color);

}
canvas.addEventListener("mousemove",movePaddle);
function movePaddle(e){
    let react=canvas.getBoundingClientRect();
    player.y=e.clientY-react.top-player.height/2;
}
function col(c,d){
    c.top=c.y-c.radius;
    c.bottom=c.y+c.radius;
    c.left=c.x-c.radius;
    c.right=c.x+c.radius;
    d.top=d.y;
    d.bottom=d.y+d.height;
    d.left=d.x;
    d.right=d.x+d.width;

    return c.right>d.left && c.bottom >d.top && c.left < d.right&&c.top < d.bottom;
}
function restBall(){
    ball.x=canvas.width/2;
    ball.y=canvas.height/2;
    ball.speed=5;
    ball.veloX=-ball.veloX;
}
function update(){
    ball.x+=ball.veloX;
    ball.y+=ball.veloY;
    let cl=0.1;
    com.y+=(ball.y-(com.y+com.height/2))*cl;
    if(ball.y + ball.radius>canvas.height || ball.y - ball.radius<0){
        ball.veloY= -ball.veloY;
        
    }
    let match=(ball.x<canvas.width/2)? player : com;
    if(col(ball,match)){
       let clop=ball.y-(match.y+match.height/2);
       clop=clop/(match.height/2);
       let angel=clop*Math.PI/4;
       let direct=(ball.x<canvas.width/2)?1:-1;
       ball.veloX=direct*ball.speed*Math.cos(angel);
       ball.veloY=ball.speed*Math.sin(angel);
       ball.speed+=0.5;
    }
    if(ball.x-ball.radius<0){
        com.score++;
        restBall();
    }
    else if(ball.x+ball.radius>canvas.width){
        player.score++;
        restBall();
    }
}
function game(){
    update();
    render();
}
const framePerSecond=50;
setInterval(game,1000/framePerSecond);