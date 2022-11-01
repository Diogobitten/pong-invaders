//bolinha
let xBolinha = 3;
let yBolinha = 10;
let velXBolinha = 5;
let velYBolinha = 5;
let diametro = 15;
let raio = diametro /2;

let colidiu = false;

function mostraBolinha (x,y) {
  circle (x,y,diametro);
}

function movBolinha (){
  xBolinha 
    += velXBolinha;
  yBolinha += velYBolinha;
}

function verColisaoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velXBolinha *= -1; 
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velYBolinha *= -1;
  }
}

function verColisaoRet (x,y) {
  colidiu = collideRectCircle(x,y,retanguloComp,retanguloAlt,xBolinha, yBolinha,raio);
  if (colidiu){
    velYBolinha *= -1;
  }
}

function verColisaoIn (){
  for (let i = 0; i < mostraInimigos.length; i++){
    colidiu = collideRectCircle (xInimigo[i],yInimigo[i],compInimigo,altInimigo,xBolinha,yBolinha,diametro);
    if(colidiu){
     voltou ();
     velXBolinha *= -1;
     velYBolinha *= -1;
     } 
   }
}


function voltou(){
  for (let i = 0; i < mostraInimigos.length; i++){
    if (xBolinha + raio > xInimigo[i] || xBolinha - raio < 0){
    yInimigo[i] = -50;
    if (yBolinha + raio > yInimigo[i] || yBolinha - raio < 0){
    yInimigo[i] = -50; 
    }  
   }   
  }
 }
