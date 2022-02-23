let parole1 = [];
let parole2 = [];
let parole3 = [];
let cont = 0;
let cont2 = 0;

function inserisci() {
    if(cont == 0){
        if (cont2 < 3){
            let stringa="";
            let boxvalue="";

            boxvalue = document.getElementById('box').value;
            parole1.push(boxvalue);
            console.log(parole1);
            stringa = stringa + ", " + boxvalue;
            document.getElementById('out1').innerHTML=parole1;
            cont2++;
            if (cont2 == 3){
                cont++;
                cont2 = 0;
            }
            return false;
        }
        

    }else{
        if(cont == 1){
            if (cont2 < 3){
                let stringa="";
                let boxvalue="";
                boxvalue = document.getElementById('box').value;
                parole2.push(boxvalue);
                console.log(parole2);
                stringa = stringa + ", " + boxvalue;
                document.getElementById('out1').innerHTML=parole1;
                document.getElementById('out2').innerHTML=parole2;
                cont2++;
                if (cont2 == 3){
                    cont++;
                    cont2 = 0;
                }
                return false;
            }
        }else{
            if(cont == 2){
                if (cont2 < 3){
                    let stringa="";
                    let boxvalue="";
                    boxvalue = document.getElementById('box').value;
                    parole3.push(boxvalue);
                    console.log(parole3);
                    stringa = stringa + ", " + boxvalue;
                    document.getElementById('out1').innerHTML=parole1;
                    document.getElementById('out2').innerHTML=parole2;
                    document.getElementById('out3').innerHTML=parole3;
                    cont2++;
                    if (cont2 == 3){
                        cont++;
                        cont2 = 0;
                    }
                    return false;
                }
            }else if(cont == 3){
                ArrayRandomCombination(parole1, parole2, parole3);
                cont++;
                return false;

            }else{
                return false;
            }
        }
    }
}

function ArrayRandomCombination(s,v,c){
    let sentence='';
    let spazio=", ";
    let lenS=s.length;
    let lenV=v.length;
    let lenC=c.length;

    let is=Math.floor(Math.random() * lenS);
    let iv=Math.floor(Math.random() * lenV);
    let ic=Math.floor(Math.random() * lenC);

    sentence = s[is] + spazio+ v[iv] + spazio + c[ic];

    document.getElementById('out4').innerHTML=sentence;
}