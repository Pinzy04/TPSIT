let audio = [];
audio[0] = new Audio("./audio-assets/do.mp3");
audio[1] = new Audio("./audio-assets/mi.mp3");
audio[2] = new Audio("./audio-assets/sol.mp3");
audio[3] = new Audio("./audio-assets/si.mp3");
audio[4] = new Audio("./audio-assets/err.mp3");

let score = 0;
let combo = 1;
let maxScore = 0;
let maxCombo = 0;
let casuale;
let tempo1;

let coloreArray=[];
coloreArray[0]="green";
coloreArray[1]="orange";
coloreArray[2]="deepskyblue";
coloreArray[3]="red";

let on=[];
on[0]=false;
on[1]=false;
on[2]=false;
on[3]=false;

var isPaused = false;

const interval = setInterval(cambiacolore,700);

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key){
    if(key.keyCode == "65"){
        tastoPremuto(0);
    }
    if(key.keyCode == "83"){
        tastoPremuto(1);
    }
    if(key.keyCode == "68"){
        tastoPremuto(2);
    }
    if(key.keyCode == "70"){
        tastoPremuto(3);
    }
}

function riprendi(){
    isPaused = false;
}

function pausa(){
    isPaused = true;
}


function cambiacolore(){
    if(isPaused == false){
        casuale=parseInt(Math.random()*4);
        cambiaColonnaColore(casuale);
    }
}

function temposcaduto(){
    audio[4].play();
    if(score - 50*combo >= 0){
        score = score - 50*combo;
        combo = 1;

        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
    }
    else{
        score = 0;
        combo = 1;

        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
    }
}

function resettaColori(){
    document.getElementById("green").style.backgroundColor="white";
    document.getElementById("orange").style.backgroundColor="white";
    document.getElementById("deepskyblue").style.backgroundColor="white";
    document.getElementById("red").style.backgroundColor="white";
    on[0]=false;
    on[1]=false;
    on[2]=false;
    on[3]=false;
}

function cambiaColonnaColore(casuale) {
    resettaColori();
    document.getElementById(coloreArray[casuale]).style.backgroundColor=coloreArray[casuale];
    on[casuale]=true;
    timeout = setTimeout(temposcaduto,700);
}

function tastoPremuto(n) {
    clearTimeout(timeout);
    if(on[n]==true){
        audio[n].play();
        score = score + 100*combo;
        combo++;
        if(score > maxScore){
            maxScore = score;
        }
        if(combo > maxCombo){
            maxCombo = combo;
        }
        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
        document.getElementById("maxScore").innerText="MAX SCORE: " + maxScore;
        document.getElementById("maxCombo").innerText="MAX COMBO: x" + maxCombo;
    }else{
        audio[4].play();
        if(score - 50*combo >= 0){
            score = score - 50*combo;
            combo = 1;

            document.getElementById("score").innerText="SCORE: " + score;
            document.getElementById("combo").innerText="COMBO: x" + combo;
        }
        else{
            score = 0;
            combo = 1;

            document.getElementById("score").innerText="SCORE: " + score;
            document.getElementById("combo").innerText="COMBO: x" + combo;
        }
    }
}
