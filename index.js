const canvas = document.querySelector('#canvas');
const drawColor = document.querySelector('#color');
const lineWidthInput = document.querySelector('#lineWidth');
const ctx = canvas.getContext('2d');




canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let position = {
    x: 0,
    y: 0,
}

//start drawing
document.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemouve", draw);
    reposition(e);
})

// stop drawing
document.addEventListener("mouseup", () =>{
    document.removeEventListener("mousemove", draw);
    
})


let color = "black";
let lineWidth = 5;

function reposition(e){
    position.x = e.clientX - canvas.offsetLeft;
    position.y = e.clientY - canvas.offsetTop;
}
function  draw(e){
    ctx.beginPath();    
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";  
    ctx.strokeStyle = color;
    ctx.moveTo(position.x, position.y);
    reposition(e);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
    ctx.closePath();
}