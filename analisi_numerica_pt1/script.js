function fattorizzatore()
{
    let contFattori = [];
    let max = 0;
    let f = 0;
    let somma = [];
    let sommatot = 0;
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
        nuovo = document.createElement("div");
        nuovo.setAttribute("id", "out" + i);
        nuovo.append("Fattori di " + i + ": " + stringaFattori);
        $("body").append(nuovo);
        
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