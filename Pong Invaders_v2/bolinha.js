//bolinha
let xBolinha = 3;
let yBolinha = 20;
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
    somRaquete.play();
  }
  if (yBolinha + raio < 0 || yBolinha - raio < 0){
    velYBolinha *= -1;
    somRaquete.play();
  }
   if (yBolinha + raio > height || yBolinha - raio < 0){
    yBolinha = 20;
    if (pontosMaiorQueZeroVida()){
     minhaVida -= 1; 
    }   
  }
}

function verColisaoRet (x,y) {
  colidiu = collideRectCircle(x,y,retanguloComp,retanguloAlt,xBolinha, yBolinha,raio);
  if (colidiu){
    velYBolinha *= -1;
    somRaquete.play();
  }
}

function verColisaoIn (){
  for (let i = 0; i < aliens.length; i++){
    colidiu = collideRectCircle (aliens[i].x,aliens[i].y,35,25,xBolinha,yBolinha,diametro);
    if(colidiu){
    aliens[i].y = -50;
    velXBolinha *= -1;
    velYBolinha *= -1;
    somPontos.play();
    meusPontos += 1;
     } 
   }
}
   
function incluiPontos(){
  textStyle(BOLD);
  fill(color(255,255,255));
  textAlign(CENTER);
  textSize(80);
  text(meusPontos, 300,80);
}

function vidas(){
  textStyle(BOLD);
  fill(color(255,255,255));
  textAlign(RIGHT);
  textSize(20);
  text(minhaVida, 60,40);
}

function pontosMaiorQueZeroVida (){
  return minhaVida > 0;
}

function pontosMaiorQueZeroPontos (){
  return meusPontos > 0;
}
