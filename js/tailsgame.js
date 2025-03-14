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

function applyResponsiveStyles() {
    const windowGame = document.querySelector('.windowgame');
    const drawingBoard = document.getElementById('board');
    console.log("resize");

    if (window.matchMedia("(max-width: 800px), (max-height: 600px)").matches) {
        console.log("ASDASDAS")
        // Условия для второго медиа-запроса
        windowGame.style.width = '300px';
        windowGame.style.height = '200px';
        drawingBoard.style.width = '287px';
        drawingBoard.style.height = '187px';
        drawingBoard.width = "287";
        drawingBoard.height = "187";
    } else if (window.matchMedia("(max-width: 1100px), (max-height: 850px)").matches) {
        console.log("asdasd");
        // Условия для первого медиа-запроса
        windowGame.style.width = '600px';
        windowGame.style.height = '400px';
        drawingBoard.style.width = '587px';
        drawingBoard.style.height = '387px';
        drawingBoard.width = "587";
        drawingBoard.height = "387";
    } else {
        // Установите стили по умолчанию, если ни одно из условий не выполнено
        windowGame.style.width = '';
        windowGame.style.height = '';
        drawingBoard.style.width = '787px';
        drawingBoard.style.height = '587px';
        drawingBoard.width = "787";
        drawingBoard.height = "587";
    }
}

window.onresize = applyResponsiveStyles;

function drawBrush(evt){
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    console.log(evt.offsetX, evt.offsetY);
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
