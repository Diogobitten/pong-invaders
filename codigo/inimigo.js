//inimigo
let inimigo;
let xInimigo = [30,130,230,330,430,530,630,730];
let yInimigo =[-50,-50,-50,-50,-50,-50,-50,-50];
let velInimigo = [-2,-0.6,-1,-0.8,-0.9,-2,-1,-0.5];
let compInimigo = 35;
let altInimigo = 25;

let inimigos = [
  {
  id: 1,
  image: "imagens/space.jpg",
  vivo: true  
}
]

function mostraInimigo () {
  for (let i = 0; i < mostraInimigos.length; i++){
  image(mostraInimigos[i],xInimigo[i],yInimigo[i],compInimigo,altInimigo);
 }
}

function movInimigo (){
  for (let i = 0; i < yInimigo.length; i++){
    yInimigo[i] -= velInimigo[i];
  }
}

function voltaPosicaoInimigo () {
  for (let i = 0; i < yInimigo.length; i++){
   if (passouTela(yInimigo[i])){
     yInimigo[i] = 0;
   } 
  }
}

function passouTela(yInimigo){
  return yInimigo > 400;
}
