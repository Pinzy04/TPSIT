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

        document.getElementById("score").innerText="score: " + score;
        document.getElementById("combo").innerText="combo: x" + combo;
    }
    else{
        score = 0;
        combo = 1;

        document.getElementById("score").innerText="score: " + score;
        document.getElementById("combo").innerText="combo: x" + combo;
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
        document.getElementById("score").innerText="score: " + score;
        document.getElementById("combo").innerText="combo: x" + combo;
    }else{
        audio[4].play();
        if(score - 50*combo >= 0){
            score = score - 50*combo;
            combo = 1;

            document.getElementById("score").innerText="score: " + score;
            document.getElementById("combo").innerText="combo: x" + combo;
        }
        else{
            score = 0;
            combo = 1;

            document.getElementById("score").innerText="score: " + score;
            document.getElementById("combo").innerText="combo: x" + combo;
        }
    }
}
