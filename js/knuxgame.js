let eggpawn = document.querySelector(`.eggpawn`);
let result = document.querySelector(`.result`);
let gamewin = document.getElementById(`knuxgame`);
let count = 0

const eggpawnsound = new Audio();
eggpawnsound.src = "/assets/sound/seen.wav";

const eggmanstart = new Audio();
eggmanstart.src = "/assets/sound/eggman_start.wav";
const eggmanend = new Audio();
eggmanend.src = "/assets/sound/eggman_end.wav";
const eggmanwoah = new Audio();
eggmanwoah.src = "/assets/sound/eggman_woah.wav";
const eggmanbah = new Audio();
eggmanbah.src ="/assets/sound/eggman_bwomph.wav"

const knux_punch = new Audio();
knux_punch.src = "/assets/sound/knux_shu.wav";

const boom = new Audio();
boom.src = "/assets/sound/punch.wav";

const knux_ok = new Audio();
knux_ok.src = "/assets/sound/knux_ok.wav";
const knux_notbad = new Audio();
knux_notbad.src = "/assets/sound/knux_notbad.wav";
const knux_yeah = new Audio();
knux_yeah.src = "/assets/sound/knux_yeah.wav";

const knux_wewon = new Audio();
knux_wewon.src = "/assets/sound/knux_wewon.wav";

const rank = new Audio();
rank.src = "/assets/sound/unlock.wav";

var myArray = [knux_yeah, knux_notbad,  knux_ok]; 
var rand = myArray[(Math.random() * myArray.length) | 0]


function randomXandY(){
    let eggpawnWidth = eggpawn.clientWidth;
    let eggpawnHeight = eggpawn.clientHeight; 

    let x = Math.floor(Math.random() * (gamewin.clientWidth - eggpawnWidth));
    let y = Math.floor(Math.random() * (gamewin.clientHeight - eggpawnHeight));

    return {x, y}
}
function EGGPAWN(){
    count ++
    boom.play()
    knux_punch.play()
    eggpawnsound.play()
    let{x,y}=randomXandY()
    eggpawn.style.left = x + `px`
    eggpawn.style.top = y + `px`
    result.innerHTML = `Счёт: ${count}`
    if (count % 10 ===0){
        rand.play()
    }
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
        eggmanstart.play()
        eggman.addEventListener(`click`, ()=>{
            if(hit == 1){
                healthNode.innerHTML=`Здоровье: ${health}`
                health = health - 1
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
                boom.play()
                knux_punch.play()
                eggmanwoah.play()    
            }
            else if(hit == 2){
                health = health - 3
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
                boom.play()
                knux_punch.play()
                eggmanwoah.play()    
            }
            else if(hit == 3){
                health = health - 10
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
                boom.play()
                knux_punch.play()
                eggmanwoah.play()
            }
            else if(hit == 4){
                health = health - 1
                hit++
                healthNode.innerHTML=`Здоровье: ${health}`
                boom.play()
                knux_punch.play()
                eggmanwoah.play()
            }
            else if(hit == 5){
                health = health - 3
                hit == 0
                healthNode.innerHTML=`Здоровье: ${health}`
                boom.play()
                knux_punch.play()
                eggmanwoah.play()
            }            
            if (health < 0){
                eggmanbah.play()
                eggmanend.play()
                gamewin.innerHTML=`<div class="pageswf victory">
                <h2>ВЫ ПОБЕДИЛИ!!!<h2>
                <p>Ваш Ранг:</p>
                <h1 style="color: red;font-size: 60px;">A</h1>
                <button onclick="setTimeout(()=>{window.location.href = 'knucklesgame.html';},900)" id="back"class="save">ЗАНОВО</button>
                </div>`
                rank.play()
                knux_wewon.play()
            }
            })    
    }
}

eggpawn.addEventListener(`click`, ()=>{
    EGGPAWN()
})