let eggpawn = document.querySelector(`.eggpawn`);
let result = document.querySelector(`.result`);
let gamewin = document.getElementById(`knuxgame`);
let count = 0


function randomXandY(){
    let eggpawnWidth = eggpawn.clientWidth;
    let eggpawnHeight = eggpawn.clientHeight; 

    let x = Math.floor(Math.random() * (gamewin.clientWidth - eggpawnWidth));
    let y = Math.floor(Math.random() * (gamewin.clientHeight - eggpawnHeight));

    return {x, y}
}
function EGGPAWN(){
    count ++
    let{x,y}=randomXandY()
    eggpawn.style.left = x + `px`
    eggpawn.style.top = y + `px`
    result.innerHTML = `Счёт: ${count}`
    DrEggman()
}

function DrEggman(){
    if (count ==50){
        gamewin.innerHTML=`<img style="cursor: pointer; transition: 0.2s" src="assets/Eggman.webp" id="eggman">
        <p class="health" id="health">Здоровье: 50</p>`
        let healthNode = document.querySelector(`#health`)
        let eggman = document.querySelector(`#eggman`)
        let hit = 1
        let health = 50;
        eggman.addEventListener(`click`, ()=>{
            if(hit == 1){
                healthNode.innerHTML=`Здоровье: ${health}`
                health = health - 1
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`  
            }
            else if(hit == 2){
                health = health - 3
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
            }
            else if(hit == 3){
                health = health - 10
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
            }
            else if(hit == 4){
                health = health - 1
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
            }
            else if(hit == 5){
                health = health - 3
                hit == 0
                healthNode.innerHTML=`Здоровье: ${health}`
            }            
            if (health < 0){
                gamewin.innerHTML=`<div class="pageswf victory">
                <h2>Вы Победили<h2>
                <button style="font-family: 'Arctika Script', sans-serif;
    padding: 10px 20px;
    font-size: 40px;
    background-color: #a41111;
    color: white; /* Цвет текста */
    border: none; /* Убираем границу */
    border-radius: 5px; /* Закругляем углы */
    cursor: pointer; /* Курсор в виде указателя */
    transition: background-color 0.3s ease;" onclick="window.location.href = 'knucklesgame.html'">ЗАНОВО</button>
                </div>`
            }
            })    
    }
}

eggpawn.addEventListener(`click`, ()=>{
    EGGPAWN()
})