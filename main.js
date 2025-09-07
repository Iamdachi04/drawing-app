const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreasebtn = document.getElementById('decrease');
const sizebtn = document.getElementById('size');
const increasebtn = document.getElementById('increase');
const clearbtn = document.getElementById('clear');

let size = 20;
let color = 'black';
let pressed=false;
let x;
let y;


function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2, true);
    ctx.fillStyle = color; // Set a color for the circle
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

decreasebtn.addEventListener('click',()=>{
    size=size==2?2:size-2;
    sizebtn.innerHTML=size;
})

increasebtn.addEventListener('click',()=>{
    size=size==72?72:size+2;
    sizebtn.innerHTML=size;
})

clearbtn.addEventListener('click',()=>{
    ctx.beginPath();
    ctx.arc(750 , 900 , 1800 , 0, Math.PI*2 , true)
    ctx.fillStyle= 'white';
    ctx.fill();
})
