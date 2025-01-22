//imagens
let imagemFundo;
let imagemHeart;
let start;

//Controle do Jogo
var stage = 0;
let mensagemExibida = false;
let chefeDerrotado = false;

//som
let trilha;
let somPontos;
let somBateu;
let somRaquete;
let somMiranha;
let somStart;
let somPerdeu;
let somYouLose;

//criar lista
let imagemAlien = [];
let imagemMiranha = [];
let imagemChefao = [];

//lista de 8 aliens
let aliens = [
 {
  id: 1,
  image: "alien0.gif",
  x: 30,
  y: -50,
  velocidade: 1,  
  vivo: true  
},
  {
  id: 2,
  image: "alien0.gif",
  x: 130,
  y: -50,
  velocidade: 0.5,  
  vivo: true  
},
  {
  id: 3,
  image: "alien0.gif",
  x: 230,
  y: -50,
  velocidade: 0.3,  
  vivo: true  
},
  {
  id: 4,
  image: "alien0.gif",
  x: 330,
  y: -50,
  velocidade: 0.5,  
  vivo: true  
},
  {
  id: 5,
  image: "alien0.gif",
  x: 430,
  y: -50,
  velocidade: 0.4,  
  vivo: true  
},
  {
  id: 6,
  image: "alien0.gif",
  x: 530,
  y: -50,
  velocidade: 0.5,  
  vivo: true  
},
  {
  id: 7,
  image: "alien0.gif",
  x: 630,
  y: -50,
  velocidade: 0.3,  
  vivo: true  
},
  {
  id: 8,
  image: "alien0.gif",
  x: 730,
  y: -70,
  velocidade: 0.6,  
  vivo: true  
}
]

let miranhas = [
  {
  id: 1,
  image: "pizza.gif",
  x: 100,
  y: -2200,  
  velocidade: 3,  
  vivo: true  
}

]

let chefaos = [
    {
  id: 1,
  image: "chefao.gif",
  x: 150,
  y: -50,  
  velocidade: 0.5,  
  vivo: true,
  acertos: 0
} 
  
  
]

let aliensTotal = aliens.length

//pontos
let meusPontos = 0;
let minhaVida = 3;


function setup() {
  createCanvas(600, 400);
}
  
  

function draw() {
  if (stage == 0){
      inicio();
      somWin.stop();  
      reiniciarJogo();
  }
  
  if (stage == 1){
      game(); 
  }
  
  if (stage == 2){
      lose();
      trilha.stop();
      trilha2.stop();
      trilha3.stop(); 
      //reiniciarJogo();
  }
  
  if (stage == 3){
     game2();
  }
    if (stage == 4){
      game3();
  }
  if (stage == 5) {
      win();
      reiniciarJogo();
    }
  
  if(keyIsDown(ENTER) && stage == 0){
    stage = 1;
    somStart.play();
  }
  
  if (keyIsDown(32) && minhaVida == 0){
      stage = 2;
      somStart.play();
      reiniciarJogo(); 
         
  }
  
 if (keyIsDown(32) && stage == 5) {
     stage = 0;
     somStart.play();
     reiniciarJogo(); 
 }
  
 if (stage == 2 && keyIsDown(32)) { 
    stage = 0;
    somStart.play();
    reiniciarJogo(); 
 }
  
 if (meusPontos == 10){
     stage = 3;
         
  }
 if (meusPontos == 20){
     stage = 4;

  }
  

}
  

function preload(){
  imagemFundo = loadImage("imagens/fundof.gif");
  imagemFundoF2 = loadImage("imagens/fundo2.gif");
  imagemFundoF3 = loadImage("imagens/fundo3.gif");
  imagemFundoF4 = loadImage("imagens/fundo.gif");
  start = loadImage("imagens/start.gif");
  trilha = loadSound("som/aha.mp3");
  trilha2 = loadSound("som/monkey.mp3");
  trilha3 = loadSound("som/lp.mp3");
  imagemHeart = loadImage("imagens/heart.gif");
  somPontos = loadSound("som/pontos.wav");
  somBateu = loadSound("som/colidiu.mp3");
  somRaquete = loadSound("som/raquete.wav");
  somMiranha = loadSound("som/homer.mp3");
  somStart = loadSound("som/start.mp3");
  somPerdeu = loadSound("som/perdeu.wav");
  somYouLose = loadSound("som/youlose.mp3");
  somWin = loadSound("som/win.mp3");
  
  for(let alien of aliens){  imagemAlien.push(loadImage("imagens/alien0.gif"));
  }
  for(let miranha of miranhas){  imagemMiranha.push(loadImage("imagens/pizza.gif"));
  }
  for(let chefao of chefaos){  imagemChefao.push(loadImage("imagens/chefao.gif"));
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

function caiuChefao(){
  for(let i = 0; i < chefaos.length; i++){
    if (chefaos[i].y == 395){
      if (pontosMaiorQueZeroPontos()){
      meusPontos -= 1;
      }  
      somBateu.play(); 
    }
  }
}

function desenharAlien() {
  for(let i = 0; i < aliens.length; i++) {
    if(aliens[i].vivo === true){
      image(imagemAlien[i], aliens[i].x,aliens[i].y,35,25)
    } 
  }
}
function desenharMiranha() {
  for(let i = 0; i < miranhas.length; i++) {

    if(miranhas[i].vivo === true){
      image(imagemMiranha[i], miranhas[i].x,miranhas[i].y,120,80)
    } 
  }
 }

function desenharChefao() {
  for(let i = 0; i < chefaos.length; i++) {

    if(chefaos[i].vivo === true){
      image(imagemChefao[i], chefaos[i].x,chefaos[i].y,120,80)
    } 
  }
 }

function moverAlien(){
  for (let i = 0; i < aliens.length; i++){
    if(aliens[i].y <= 600) {
      aliens[i].y = aliens[i].y + aliens[i].velocidade
     // aliens[i].x = aliens[i].x + aliens[i].velocidade
    }else{
     aliens[i].y = -50
     //aliens[i].x = -10
     //aliens[i].x = aliens[i].x + 5
    } 
  }
 }

function moverMiranha(){
  for (let i = 0; i < miranhas.length; i++){
   
    if(miranhas[i].y <= 600) {
      miranhas[i].y = miranhas[i].y + miranhas[i].velocidade
    }else{
     miranhas[i].y = -50
     miranhas[i].x = miranhas[i].x + 200
    } 
  }
 }

function moverChefao() {
  for (let i = 0; i < chefaos.length; i++) {
    let chefao = chefaos[i]; // Facilita a leitura do código

    if (chefao.vivo) {
      // Movimenta o chefão para baixo
      chefao.y += chefao.velocidade;

      // Verifica se o chefão saiu da tela
      if (chefao.y > height) {
        stage = 2;
        lose();        
        //chefao.y = -50; // Reinicia a posição acima da tela
        //chefao.x = random(50, width - 150); // Reposiciona horizontalmente de forma aleatória
      }
    }
  }
}


function desenharHeart(){
  image(imagemHeart, 12,15,30,30)
}

function game() {
  background (imagemFundo);
  desenharAlien();
  moverAlien();
  mostraRetangulo (xRetangulo,yRetangulo);
  movJogador();
  mostraBolinha (xBolinha,yBolinha);
  movBolinha();
  verColisaoBorda();
  verColisaoRet (xRetangulo,yRetangulo);
  verColisaoIn();
  incluiPontos();
  caiuAlien();
  vidas();
  desenharHeart();
  desenharMiranha();
  moverMiranha();
  verColisaoMiranha();
  
  if (!trilha.isPlaying()) {
        trilha.loop(); // Toca continuamente
      }
    
  
  if (minhaVida == 0){
    stage = 2;
    somPerdeu.play();
    somYouLose.play();
    trilha.play();
  }
  
}

function game2() {
  background (imagemFundoF2);
  desenharAlien();
  moverAlien();
  mostraRetangulo (xRetangulo,yRetangulo);
  movJogador();
  mostraBolinha (xBolinha,yBolinha);
  movBolinha();
  verColisaoBorda();
  verColisaoRet (xRetangulo,yRetangulo);
  verColisaoIn();
  incluiPontos();
  caiuAlien();
  vidas();
  desenharHeart();
  desenharMiranha();
  moverMiranha();
  verColisaoMiranha();
  
   if (!trilha2.isPlaying()) {
        trilha.stop();
        trilha2.loop(); // Toca continuamente
      }
  
    if (minhaVida == 0){
    stage = 2;
    somPerdeu.play();
    somYouLose.play();
  }
  
}

function game3() {
  background(imagemFundoF3);
  vidas();

  // Verifica se a vida chegou a 0 e muda imediatamente para a tela de derrota
  if (minhaVida <= 0) {
    if (stage !== 2) { // Apenas transita para derrota se o stage ainda não foi alterado
      lose();
      stage = 2;
      trilha3.stop();
    }
    return; // Para a execução do restante da lógica no game3
  }

  // Continua o jogo normalmente se o jogador ainda tem vidas
  let chefao = chefaos[0];

  if (chefao.vivo) {
    desenharChefao();
    moverChefao();
  }

  //moverAlien();
  mostraRetangulo(xRetangulo, yRetangulo);
  movJogador();
  mostraBolinha(xBolinha, yBolinha);
  movBolinha();
  verColisaoBorda();
  verColisaoRet(xRetangulo, yRetangulo);
  verColisaoIn();
  //incluiPontos();
  //caiuAlien();
  desenharHeart();
  verColisaoChefao();

  // Lógica para tocar trilha sonora
  if (!trilha3.isPlaying()) {
    trilha.stop();
    trilha2.stop();
    trilha3.loop(); // Toca continuamente
  }

  // Verifica se o chefão foi derrotado
  if (chefeDerrotado) {
    stage = 5; // Vai para a tela de vitória
    trilha3.stop();
  }
}


function reiniciarJogo() {
  // Reinicia o estado dos aliens
  aliens.forEach((alien, index) => {
    alien.y = -50; // Reseta a posição inicial
    alien.vivo = true; // Torna todos os aliens vivos novamente
  });

  // Reinicia o estado das miranhas
  miranhas.forEach((miranha) => {
    miranha.y = -2200; // Reseta a posição inicial
    miranha.vivo = true;
  });

  // Reinicia o estado dos chefões
  chefaos.forEach((chefao) => {
    chefao.y = -50; // Reseta a posição inicial
    chefao.x = 150 + chefao.id * 100; // Ajusta a posição inicial com base no ID (se necessário)
    chefao.vivo = true; // Torna os chefes vivos novamente
    chefao.acertos = 0;
  });

  // Reinicia variáveis principais
  minhaVida = 3;
  meusPontos = 0;
  mensagemExibida = false;
  chefeDerrotado = false;

  // Reseta músicas ou sons se necessário
  trilha.stop();
  trilha2.stop();
  trilha3.stop();
  //somPerdeu.stop();
  //somYouLose.stop();
}

