var catalogo=['1.png','2.png','3.png','4.png','5.png','6.png'];
var imagenes = [];
var mazo=[];
var orden=[];
var cartas_activas=0;
var carta1="";
var carta2="";
var pos2="";

barajear();
function barajear(){
    var imagen=0,posicion=0,i=0,j=0,k=0;

    while(i<3){
        imagen=Math.floor(Math.random() * 6);
        if(!imagenes.includes(imagen)){
            imagenes.push(imagen);
            i++;
        }
    }
    while(k<6){
        posicion=Math.floor(Math.random() * 6);
        if(!orden.includes(posicion)){
            orden.push(posicion);
            k++;
        }
    }
    k=0;
    for(i=0;i<6;i++){
        mazo.push(0);
    }
    for(i=0;i<6;i++){
        mazo[orden[i]]=catalogo[imagenes[k]];
        k==2?k=0: k++;
    }
    console.log(mazo);
}
var pares=0;
function Voltear(id){
    var indice=id.replace("pos","");
    --indice;
    console.log("id",indice);
    if(pares!=3){
        if (cartas_activas==0 ) {
            cartas_activas++;
            carta1=mazo[indice];
            document.getElementById(id).src = "img/"+mazo[indice]+"";
            pos2=id;
        }else{
            cartas_activas=0;
            carta2=mazo[indice];
            document.getElementById(id).src = "img/"+mazo[indice]+"";
            if(carta1==carta2){
                setTimeout(function() {alert("par "+pares+" encontrado");}, 300);
                pares++;
            }else{
                setTimeout(function() {
                    document.getElementById(id).src="img/logo.png";
                document.getElementById(pos2).src="img/logo.png";
                }, 300);
                
            }
        }
    }else{
        alert("ganaste");
    }
}