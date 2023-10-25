const body = document.querySelector("body");
let fourColors = ["yellow", "green", "blue", "red", "orange", "pink"];

let n = 3;
let time = 2000;
let pause = 200;

let random = Math.floor(Math.random() * (n + 1));
body.style.backgroundColor = fourColors[1];

setInterval(() => {
    body.style.backgroundColor = "white";
    setTimeout(() => {
        let random = Math.floor(Math.random() * (n + 1));
        body.style.backgroundColor = fourColors[random];
    }, pause);
}, time);


function two() {
    n = 1;
}

function four() {
    n = 3;
}

function six() {
    n = 5;
}

const twoBtn = document.querySelector('#two-btn');
const fourBtn = document.querySelector('#four-btn');
const sixBtn = document.querySelector('#six-btn');

twoBtn.addEventListener('click', () => {
    twoBtn.classList.add('btn-success');
    fourBtn.classList.add('btn-primary');
    fourBtn.classList.remove('btn-success');
    sixBtn.classList.add('btn-primary');
    sixBtn.classList.remove('btn-success');
});

fourBtn.addEventListener('click', () => {
    twoBtn.classList.add('btn-primary');
    twoBtn.classList.remove('btn-success');
    fourBtn.classList.add('btn-success');
    sixBtn.classList.add('btn-primary');
    sixBtn.classList.remove('btn-success');
});

sixBtn.addEventListener('click', () => {
    twoBtn.classList.add('btn-primary');
    twoBtn.classList.remove('btn-success');
    fourBtn.classList.add('btn-primary');
    fourBtn.classList.remove('btn-success');
    sixBtn.classList.add('btn-success');
});