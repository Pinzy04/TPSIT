function fattorizzatore()
{   
    n = document.getElementById("numero").value;
    let contFattori = [];
    let max = 0;
    let f = 0;
    let somma = [];
    let sommatot = 0;
    let div = 1;
    let conta = 0;

    while (conta <= 1 && div <= n / 2) {
        if (n % div == 0) {
            conta++;
        }
        div++;
    }
    if (conta == 1) {
        nuovo = document.createElement("div");
        nuovo.setAttribute("style", "color: red");
        nuovo.append( n + " è un numero primo" );
        $("body").append(nuovo);
    }
    else {
        nuovo = document.createElement("div");
        nuovo.setAttribute("style", "color: black");
        nuovo.append( n + " non è un numero primo" );
        $("body").append(nuovo);
    }

    $("body").append("<br>");

    for (i = 0; i < n; i++) {
        j = i;
        div = 1;
        conta = 0;
        while (conta <= 1 && div <= j / 2) {
            if (j % div == 0) {
                conta++;
            }
            div++;    
        }
        if (conta == 1) {
            nuovo = document.createElement("div");
            nuovo.setAttribute("style", "color: red");
            nuovo.append( j + " è un numero primo" );
            $("body").append(nuovo);
        }
        else {
            nuovo = document.createElement("div");
            nuovo.setAttribute("style", "color: black");
            nuovo.append( j + " non è un numero primo" );
            $("body").append(nuovo);
        }
    }






    for(i = 1; i < 1001; i++){
        let stringaFattori = "";
        let fineciclo = i;
        contFattori[i] = 0;
        somma[i] = 0;
        for(let fattore=1; fattore <= fineciclo;fattore++)
        {
            if (i%fattore==0)
            {  
                stringaFattori=stringaFattori + fattore+" ";
                contFattori[i]++;
                somma[i] = somma[i] + fattore;
            }
        }
        if(somma[i] != i+1){
            sommatot = sommatot + somma[i];
        }
        
        if(contFattori[i] > f)
        {
            max = i;
            f = contFattori[i];
        }
    }


    let contFattori1 = [];
    let max1 = 0;
    let f1 = 0;
    for(i = 1000; i < 2000; i++){
        let fineciclo = i;
        contFattori1[i] = 0;
        for(let fattore=1; fattore <= fineciclo;fattore++)
        {
            if (i%fattore==0)
            {
                contFattori1[i]++;
            }
        }
        if(contFattori1[i] > f1)
        {
            max1 = i;
            f1 = contFattori1[i];
        }
    }
    document.getElementById("cont").innerHTML = ("Numero con più fattori è " + max + " ( " + f +" )");
    document.getElementById("somma").innerHTML = ("I fattori totali dei numeri compresi tra 1 e 1000 sono: " + sommatot);
    document.getElementById("mol").innerHTML = ("Il numero che si trova moltiplicando il numero del punto 1 e il numero che ha più fattori possibili tra 1000 e 2000 è: " + (max*max1));
}