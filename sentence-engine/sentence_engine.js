let vetSubject =[];
            let vetVerb=[];
            let vetCO=[];
            let vetAdjective=[];

            function AddWord(parola) {

                let subjectItem="";
                if (parola=='soggetto')
                {
                    subjectItem = document.getElementById('subject').value;
                    if (subjectItem.length>=1)
                    { 
                        vetSubject.push(subjectItem);
                        document.getElementById('outsoggetto').innerText=vetSubject;
                        document.getElementById('subject').value="";
                    }
                }

                if (parola=='verbo')
                {
                    subjectItem = document.getElementById('verb').value;
                    if (subjectItem.length>=1)
                    {
                        vetVerb.push(subjectItem);
                        document.getElementById('outverbo').innerText=vetVerb;
                        document.getElementById('verb').value="";
                    }
                }

                if (parola=='co')
                {
                    subjectItem = document.getElementById('co').value;
                    if (subjectItem.length>=1)
                    {
                        vetCO.push(subjectItem);
                        document.getElementById('outco').innerText=vetCO;
                        document.getElementById('co').value="";
                    }
                }

                if (parola=='aggettivo')
                {
                    subjectItem = document.getElementById('adjective').value;
                    if (subjectItem.length>=1)
                    {
                        vetAdjective.push(subjectItem);
                        document.getElementById('outa').innerText=vetAdjective;
                        document.getElementById('adjective').value="";
                    }
                }
            }

            function generatore(){
                let sentence='';
                let spazio=" ";
                let lenS=vetSubject.length;
                let lenV=vetVerb.length;
                let lenC=vetCO.length;
                let lenA=vetAdjective.length;

                let is=Math.floor(Math.random() * lenS);
                let iv=Math.floor(Math.random() * lenV);
                let ic=Math.floor(Math.random() * lenC);
                let ia=Math.floor(Math.random() * lenC);

                sentence = vetSubject[is] + spazio+ vetVerb[iv] + spazio + vetCO[ic] + spazio + vetAdjective[ia];

                document.getElementById('output').innerHTML=sentence;
            }
