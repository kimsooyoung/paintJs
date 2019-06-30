const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokestyle = 'black';
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(e){
    painting = true;
}

function stopPainting(e){
    painting = false;
}

function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    if (painting) {
        ctx.lineTo(x, y);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting );
    canvas.addEventListener('mouseleave', stopPainting)
}