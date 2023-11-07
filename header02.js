const header = document.querySelector("body > header");
header.style.position = "absolute";
header.style.top = "0";
header.style.left = "0";
header.style.maxWidth = "100%";
header.style.zIndex = "100000";
const altoHeader = header.clientHeight;
const segundo = document.querySelector("body > :nth-child(2)");
segundo.style.marginTop = altoHeader+"px";
let freno=false;
let scrollPrevio=0;
let scrollActual=0;
let distancia=0;
let diferencia=0;
let eltop=header.style.top;
eltop = parseInt(eltop);
const scrollear = function(){
    scrollActual = document.documentElement.scrollTop;
    if(scrollActual>scrollPrevio){
        if (scrollActual>4*parseInt(altoHeader)){
            if(freno == false){
                header.style.position = "fixed";
                header.style.top = -parseInt(altoHeader)+"px";
                freno=true;
            }
            eltop=header.style.top;
            eltop = parseInt(eltop);
            diferencia=scrollActual-scrollPrevio;
            distancia=eltop+diferencia;
            if(distancia<0){
                header.style.top = parseInt(distancia)+"px";
            }else{
                header.style.top = "0px";
            }
        }
	}else{
        freno=false;
        if (scrollActual<5*parseInt(altoHeader)){
            if(header.style.position == "fixed"){
                eltop=header.style.top;
                eltop = parseInt(eltop);
                diferencia=scrollPrevio-scrollActual;
                distancia=eltop-diferencia;
                if(distancia>-parseInt(altoHeader)){
                    header.style.top = parseInt(distancia)+"px";
                }else{
                    header.style.position = "absolute";
                    header.style.top = "0px";
                }
            }
        }
	}
	scrollPrevio=scrollActual;
};

window.addEventListener("scroll", scrollear);

