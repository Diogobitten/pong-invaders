let imagemFundo;
let imagemHeart;
// som
let trilha;
let somPontos;
let somBateu;
let somRaquete;

//criar lista
let imagemAlien = [];

//lista de 8 aliens
let aliens = [
 {
  id: 1,
  image: "imagens/alien0.gif",
  x: 30,
  y: -50,
  velocidade: 1,  
  vivo: true  
},
  {
  id: 2,
  image: "imagens/alien0.gif",
  x: 130,
  y: -50,
  velocidade: 0.5,  
  vivo: true  
},
  {
  id: 3,
  image: "imagens/alien0.gif",
  x: 230,
  y: -50,
  velocidade: 0.3,  
  vivo: true  
},
  {
  id: 4,
  image: "imagens/alien0.gif",
  x: 330,
  y: -50,
  velocidade: 0.4,  
  vivo: true  
},
  {
  id: 5,
  image: "imagens/alien0.gif",
  x: 430,
  y: -50,
  velocidade: 0.4,  
  vivo: true  
},
  {
  id: 6,
  image: "imagens/alien0.gif",
  x: 530,
  y: -50,
  velocidade: 0.5,  
  vivo: true  
},
  {
  id: 7,
  image: "imagens/alien0.gif",
  x: 630,
  y: -50,
  velocidade: 0.3,  
  vivo: true  
},
  {
  id: 8,
  image: "imagens/alien0.gif",
  x: 730,
  y: -70,
  velocidade: 0.6,  
  vivo: true  
}
]

let aliensTotal = aliens.length

//pontos
let meusPontos = 0;
let minhaVida = 3;


function setup() {
  createCanvas(600, 400);
  trilha.loop ();
}

function draw() {
  background(imagemFundo);
  desenharAlien ();
  moverAlien ();
  mostraRetangulo (xRetangulo,yRetangulo);
  movJogador ();
  mostraBolinha (xBolinha,yBolinha);
  movBolinha ();
  verColisaoBorda ();
  verColisaoRet (xRetangulo,yRetangulo);
  verColisaoIn ();
  incluiPontos ();
  caiuAlien ();
  vidas ();
  desenharHeart ();
}

function preload (){
  imagemFundo = loadImage("imagens/fundof.gif");
  trilha = loadSound("som/lp.mp3");
  imagemHeart = loadImage("imagens/heart.gif");
  somPontos = loadSound("som/pontos.wav");
  somBateu = loadSound("som/colidiu.mp3");
  somRaquete = loadSound("som/raquete.wav");
  
  for(let alien of aliens){  imagemAlien.push(loadImage("imagens/alien0.gif"));
  }
}

function caiuAlien(){
  for(let i = 0; i < aliens.length; i++){
    if (aliens[i].y == 395){
      if (pontosMaiorQueZeroPontos()){
      meusPontos -= 1;
      }  
      somBateu.play(); 
    }
  }
}

function desenharAlien () {
  for(let i = 0; i < aliens.length; i++) {
    if(aliens[i].vivo === true){
      image(imagemAlien[i], aliens[i].x,aliens[i].y,35,25)
    } 
  }
}

function moverAlien (){
  for (let i = 0; i < aliens.length; i++){
   
    if(aliens[i].y <= 600) {
      aliens[i].y = aliens[i].y + aliens[i].velocidade
    }else{
     aliens[i].y = -50
     aliens[i].x = aliens[i].x + 5
    } 
  }
}

function desenharHeart (){
  image(imagemHeart, 12,15,30,30)
}


      

