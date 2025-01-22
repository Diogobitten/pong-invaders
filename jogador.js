//jogador
let xRetangulo = 260;
let yRetangulo = 390;
let retanguloComp = 90;
let retanguloAlt = 10;

function mostraRetangulo (x,y) {
  rect (x,y,retanguloComp,retanguloAlt,20,20,20,20);
}

function movJogador (){
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverL())
    xRetangulo -= 10;
    }
  
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverR()){
    xRetangulo += 10;
}
}
}
function podeSeMoverL (){
  return xRetangulo > 0;
}

function podeSeMoverR (){
  return xRetangulo < 510;
}
  