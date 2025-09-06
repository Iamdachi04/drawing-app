const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2, true);
    ctx.fillStyle = 'red'; // Set a color for the circle
    ctx.fill();
}


drawCircle(100,200);