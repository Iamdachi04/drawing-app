const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 5;
let color = 'black';
let pressed=false;
let x;
let y;

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2, true);
    ctx.fillStyle = 'black'; // Set a color for the circle
    ctx.fill();
}


function drawLine(x1,y1,x2,y2){
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.strokeStyle=color;
ctx.lineWidth=size*2;
ctx.stroke();
}

canvas.addEventListener('mousedown',(e)=>{
    pressed=true;
    x= e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup',(e)=>{
    pressed = false;
    x=undefined;
    y= undefined;
})   

canvas.addEventListener('mousemove',(e)=>{
    if(pressed){
       const m = e.offsetX;
       const n = e.offsetY;
       
      drawCircle(m,n);

      drawLine(x,y,m,n);

      x=m;
      y=n;
    }
})