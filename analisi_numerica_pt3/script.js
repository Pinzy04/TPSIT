function cerca()
{
    let div = 0;
    let cont = 0;
    let primi = [];
    let mol = [];

    nuovo = document.createElement("div");
    nuovo.setAttribute("id","conteggio");
    $("body").append(nuovo);

    for(let i=10000; i<10100; i++) {
        for(let j=1; j<i + 1; j++) {
            if (i % j == 0) {
                div++; 
            }
        }

        if (div == 2) {
            primi[cont] = i;

            cont++;

            nuovo = document.createElement("div");
            nuovo.append(i);
            $("body").append(nuovo);

        }
            
        div = 0;  
    }

    let str = "";
    for (var i=0; i < primi.length - 1; i++) {
        mol[i] = primi[i] * primi[i+1];
        str += (primi[i] + " x " + primi[i+1] + " = " + mol[i] + "<br>");
    }

    $("#conteggio").append("<br>I numeri primi sono " + cont +": <br>");
    
    $("body").append("I numeri moltiplicati a coppie sono: <br>" + str);
}