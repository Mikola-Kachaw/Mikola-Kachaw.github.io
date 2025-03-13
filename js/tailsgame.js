const drawingBoard = document.getElementById(`board`);
const colorPick = document.getElementById(`color-pick`);
const brushPick = document.getElementById(`brush-size-pick`);
const save = document.getElementById(`save`);
const clear = document.getElementById(`clear`);

const ctx = drawingBoard.getContext(`2d`);

const board_width = drawingBoard.width = 787;
const board_height = drawingBoard.height = 587;

let brushsize = brushPick.value;
let currentColor = colorPick.value;
let isDrawing = false;

function changeColor(evt) {
    currentColor = evt.target.value;
}

function changebrushSize(evt) {
    brushsize = evt.target.value;
}

function drawBrush(x, y) {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
}

function draw(evt) {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getEventPosition(evt);
    drawBrush(offsetX, offsetY);
}

function startdraw(evt) {
    isDrawing = true;
    const { offsetX, offsetY } = getEventPosition(evt);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushsize;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
}

function stopdraw() {
    isDrawing = false;
    ctx.closePath();
}

function clearBoard() {
    ctx.clearRect(0, 0, board_width, board_height);
}

function createElement(name, text, classes = [], listeners = []) {
    const element = document.createElement(name);
    element.textContent = text;
    element.classList.add(...classes);
    listeners.forEach(listener => {
        element.addEventListener(listener.event, listener.handler);
    });
    return element;
}

function saveDrawing() {
    const data = drawingBoard.toDataURL();
    const a = createElement('a');
    a.href = data;
    a.download = 'image.png';
    a.click();
}

function getEventPosition(evt) {
    let rect = drawingBoard.getBoundingClientRect();
    let x, y;

    if (evt.touches) {
        // Для мобильных устройств
        x = evt.touches[0].clientX - rect.left;
        y = evt.touches[0].clientY - rect.top;
    } else {
        // Для десктопа
        x = evt.offsetX;
        y = evt.offsetY;
    }

    return { offsetX: x, offsetY: y };
}

// Обработчики событий для мыши
drawingBoard.addEventListener('mousemove', draw);
window.addEventListener('mousedown', startdraw);
window.addEventListener('mouseup', stopdraw);
clear.addEventListener('click', clearBoard);
colorPick.addEventListener('change', changeColor);
brushPick.addEventListener('change', changebrushSize);
save.addEventListener('click', saveDrawing);

// Обработчики событий для мобильных устройств
drawingBoard.addEventListener('touchmove', draw);
window.addEventListener('touchstart', startdraw);
window.addEventListener('touchend', stopdraw);
