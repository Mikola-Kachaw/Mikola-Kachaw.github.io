
var audio = document.getElementById(`theme`);
audio.volume = 0.05;

const soundbeep = new Audio();
soundbeep.src = "/assets/sound/menubeep.wav";

const soundselect = new Audio();
soundselect.src = "/assets/sound/menuselect.wav";

const buttons = document.querySelectorAll(`#back, #swfsel, #menuselect, #sonicgame, #tailsgame, #knucklesgame, #save, #clear` );

buttons.forEach(button => {
    button.addEventListener(`mouseover`, () => {
        soundbeep.play();
    });
    
    button.addEventListener(`mouseleave`, () => {
        soundbeep.pause();
        soundbeep.currentTime = 0;
    });

    button.addEventListener(`click`, () => {
        soundselect.play();
    });
});

const sonicbutton = document.querySelector(`#sonicgame`);
const tailsbutton = document.querySelector(`#tailsgame`);
const knucklesbutton = document.querySelector(`#knucklesgame`);

const ssonic = new Audio();
ssonic.src = "/assets/sound/ssonic.wav";

const stails = new Audio();
stails.src = "/assets/sound/stails.wav";

const sknuckles = new Audio();
sknuckles.src = "/assets/sound/sknuckles.wav";

sonicbutton.addEventListener(`click`, () => {
    ssonic.play();
});

tailsbutton.addEventListener(`click`, () => {
    stails.play();
});

knucklesbutton.addEventListener(`click`, () => {
    sknuckles.play();
});