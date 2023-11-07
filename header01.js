const header = document.querySelector("body > header");
header.style.position = "absolute";
header.style.top = "0";
header.style.left = "0";
header.style.maxWidth = "100%";
header.style.zIndex = "100000";
const altoHeader = header.clientHeight;
const segundo = document.querySelector("body > :nth-child(2)");
segundo.style.marginTop = altoHeader+"px";
let freno=true;
let scrollPrevio=0;
let scrollActual=0;
let distancia=0;
let diferencia=0;
let eltop;
const scrollear = function(){
    scrollActual = document.documentElement.scrollTop;
    diferencia = scrollActual - scrollPrevio;
    if(scrollActual > scrollPrevio){
        if(header.style.position == "fixed"){
            eltop=header.style.top;
            eltop = parseInt(eltop);
            eltop-=4;
            header.style.top = eltop+"px";            
            if(eltop<=-altoHeader){
                header.style.position = "absolute";
                header.style.top = "0px";
            }
        }
    }else{
        if(header.style.position == "absolute" && scrollActual > altoHeader*5){
                header.style.position = "fixed";
                header.style.top = -altoHeader+"px";           
        }else{            
            if(scrollActual < altoHeader*5 && header.style.position == "fixed"){
                eltop=header.style.top;
                eltop = parseInt(eltop);
                eltop-=6;
                header.style.top = eltop+"px";                
                if(eltop<=-altoHeader){
                    header.style.position = "absolute";
                    header.style.top = "0px";
                }
            }else{
                eltop=header.style.top;
                eltop = parseInt(eltop);
                eltop+=4;
                header.style.top = eltop+"px";
                if(eltop>=0){
                    header.style.top = "0";
                }
            }
        }        
	}
	scrollPrevio=scrollActual;
}
window.addEventListener("scroll", scrollear);