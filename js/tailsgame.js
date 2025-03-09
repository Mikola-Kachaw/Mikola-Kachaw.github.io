const drawingBoard = document.getElementById(`board`)
const colorPick = document.getElementById(`color-pick`)
const brushPick = document.getElementById(`brush-size-pick`)
const save = document.getElementById(`save`)
const clear = document.getElementById(`clear`)

const ctx = drawingBoard.getContext(`2d`)

const board_width=drawingBoard.width=787;
const board_height=drawingBoard.height=587;


let brushsize = brushPick.value;
let currentColor = colorPick.value;
let isDrawing = false;

let snapshot = null;

function changeColor(evt){
    currentColor = evt.target.value
}

function changebrushSize(evt){
    brushsize = evt.target.value
}


function drawBrush(evt){
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.stroke();
}

function draw(evt){
    if(!isDrawing) return;
    drawBrush(evt);
}

function startdraw(evt){
    isDrawing = true;
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushsize;
    ctx.beginPath();
}

function stopdraw(evt){
    isDrawing=false;
    ctx.closePath();
}

function clearBoard(){
    ctx.clearRect(0,0,board_width, board_height);
}

function createElement(name, text, classes=[], listeners=[]){
    const element =document.createElement(name);
    element.textContent=text;
    element.classList.add(...classes);
    listeners.forEach(listener => {
        element.addEventListener(listener.event, listener.haandler);
    });
    return element;
}

function saveDrawing(){
    const data = drawingBoard.toDataURL();
    const a = createElement('a');
    a.href = data;
    a.download = 'image.png';
    a.click();
}
drawingBoard.addEventListener('mousemove', draw);
window.addEventListener(`mousedown`, startdraw)
window.addEventListener(`mouseup`, stopdraw)
clear.addEventListener(`click`, clearBoard)
colorPick.addEventListener('change', changeColor)
brushPick.addEventListener(`change`, changebrushSize);
save.addEventListener(`click`, saveDrawing)