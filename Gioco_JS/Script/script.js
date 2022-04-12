
//creazione di un array con le soundtrack necessarie
let audio = [];
audio[0] = new Audio("./audio-assets/do.mp3");
audio[1] = new Audio("./audio-assets/mi.mp3");
audio[2] = new Audio("./audio-assets/sol.mp3");
audio[3] = new Audio("./audio-assets/si.mp3");
audio[4] = new Audio("./audio-assets/err.mp3");

//creazione di variabili
let score = 0;      //punteggio
let combo = 1;      //moltiplicatore del punteggio, incrementa ogni volta che si preme il tasto corretto
let maxScore = 0;   //punteggio massimo raggiunto
let maxCombo = 0;   //combo massima raggiunta
let casuale;

//creazione dell'array contenente i colori dei tasti
let coloreArray=[];             
coloreArray[0]="green";
coloreArray[1]="orange";
coloreArray[2]="deepskyblue";
coloreArray[3]="red";

//variabili booleane utilizzate per far capire al programma se il tasto è acceso
let on=[];
on[0]=false;
on[1]=false;
on[2]=false;
on[3]=false;

var isPaused = false;   //variabile booleana per mettere in pausa il gioco

const interval = setInterval(cambiacolore,700); //intervallo usato per cambiare i colori dei tasti

window.addEventListener('keydown', checkKeyPress, false);   //evento keyboard per leggere gli imput da tastiera

function checkKeyPress(key){
    if(key.keyCode == "65"){    //tasto 'A'
        tastoPremuto(0);
    }
    if(key.keyCode == "83"){    //tasto 'S'
        tastoPremuto(1);
    }
    if(key.keyCode == "68"){    //tasto 'D'
        tastoPremuto(2);
    }
    if(key.keyCode == "70"){    //tasto 'F'
        tastoPremuto(3);
    }
}

function riprendi(){
    isPaused = false;       //riprende il gioco
}

function pausa(){
    isPaused = true;        //mette in pausa il gioco
}


function cambiacolore(){
    if(isPaused == false){
        casuale=parseInt(Math.random()*4);      //crea un numero casuale da 0 a 3
        cambiaColonnaColore(casuale);           //richiama la funzione per accendere il tasto casuale
    }
}

//funzione eseguita quando scade il tempo per premere il tasto
function temposcaduto(){
    audio[4].play();        //riproduce il suono di errore

    if(score - 50*combo >= 0){          //controllo del punteggio per non farlo scendere sotto lo 0
        score = score - 50 * combo;     //decurta il punteggio della metà dei punti che si sarebbero potuti ottenere
        combo = 1;                      //resetta la combo al valore predefinito

        //aggiorna lo scoreContainer
        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
    }
    else{
        //se il punteggio va sotto 0
        score = 0;      //si imposta a 0
        combo = 1;      //si resetta la combo al valore predefinito

        //aggiorna lo scoreContainer
        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
    }
}

//funzione di reset, riporta i riquadri e le variabili "on" al valore predefinito
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

//funzione per accendere un tasto in modo casuale
function cambiaColonnaColore(casuale) {
    resettaColori();        //riporta i colori e le variabili "on" ai valori predefiniti
    document.getElementById(coloreArray[casuale]).style.backgroundColor=coloreArray[casuale]; //colora/accende il tasto casuale
    on[casuale]=true;   //attiva la variabile booleana per indicare che il tasto è acceso
    timeout = setTimeout(temposcaduto,700); //imposta un timeout per il tempo che il tasto è acceso
}

//funzione eseguita al click del mouse su un bottone o alla pressione di un tasto
function tastoPremuto(n) {
    clearTimeout(timeout);              //disattiva il timeout
    if(on[n]==true){                    //controlla che il tasto selezionato è acceso
        audio[n].play();                //riproduce la nota assegnata al tasto
        score = score + 100*combo;      //incrementa il punteggio in base alla combo attuale
        combo++;                        //incrementa la combo
        if(score > maxScore){           //gestisce il punteggio massimo
            maxScore = score;
        }
        if(combo > maxCombo){           //gestisce la combo massima
            maxCombo = combo;
        }
        //aggiorna lo scoreContainer
        document.getElementById("score").innerText="SCORE: " + score;
        document.getElementById("combo").innerText="COMBO: x" + combo;
        document.getElementById("maxScore").innerText="MAX SCORE: " + maxScore;
        document.getElementById("maxCombo").innerText="MAX COMBO: x" + maxCombo;
    }else{
        audio[4].play();                //riproduce il suono di errore quando si sbaglia tasto
        
        if(score - 50*combo >= 0){      //controllo del punteggio per non farlo scendere sotto lo 0
            score = score - 50*combo;   //decurta il punteggio della metà dei punti che si sarebbero potuti ottenere
            combo = 1;                  //resetta la combo al valore predefinito

            //aggiorna lo scoreContainer
            document.getElementById("score").innerText="SCORE: " + score;
            document.getElementById("combo").innerText="COMBO: x" + combo;
        }
        else{
            //se il punteggio va sotto 0
            score = 0;      //si imposta a 0
            combo = 1;      //si resetta la combo al valore predefinito

            //aggiorna lo scoreContainer
            document.getElementById("score").innerText="SCORE: " + score;
            document.getElementById("combo").innerText="COMBO: x" + combo;
        }
    }
}