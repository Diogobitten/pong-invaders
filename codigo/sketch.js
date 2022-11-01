//imagem
let fundo;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(fundo);
  mostraRetangulo (xRetangulo,yRetangulo);
  mostraInimigo ();
  movInimigo ();
  voltaPosicaoInimigo ();
  movJogador ();
  mostraBolinha (xBolinha,yBolinha);
  movBolinha ();
  verColisaoBorda ()
  verColisaoRet (xRetangulo,yRetangulo);
  verColisaoIn ();
  
}

function preload () {
  fundo = loadImage ("imagens/space.jpg");
  inimigo = loadImage ("imagens/si1.png");
  mostraInimigos = [inimigo,inimigo,inimigo,inimigo,inimigo,inimigo,inimigo,inimigo];
}


