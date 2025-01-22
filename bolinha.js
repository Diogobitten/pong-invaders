//bolinha
let xBolinha = 3;
let yBolinha = 20;
let velXBolinha = 8;
let velYBolinha = 8;
let diametro = 15;
let raio = diametro / 2;

let colidiu = false;

function mostraBolinha(x, y) {
  circle(x, y, diametro);
}

function movBolinha() {
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function verColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velXBolinha *= -1;
    somRaquete.play();
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velYBolinha *= -1;
    somRaquete.play();
  }
  if (yBolinha + raio > 400) {
    voltar();
  }
}

function verColisaoRet(x, y) {
  colidiu = collideRectCircle(x, y, retanguloComp, retanguloAlt, xBolinha, yBolinha, raio);
  if (colidiu) {
    velYBolinha *= -1;
    somRaquete.play();
  }
}

function verColisaoIn() {
  // Verifica se o stage atual não é o Final Boss (stage = 4)
  if (stage !== 4) {
    for (let i = 0; i < aliens.length; i++) {
      colidiu = collideRectCircle(aliens[i].x, aliens[i].y, 35, 25, xBolinha, yBolinha, diametro);
      if (colidiu) {
        aliens[i].y = -50; // Reseta a posição do alien
        velXBolinha *= -1; // Inverte a direção horizontal da bolinha
        velYBolinha *= -1; // Inverte a direção vertical da bolinha
        somPontos.play(); // Toca o som de pontos
        meusPontos += 1; // Incrementa os pontos
        if (yBolinha - raio <= 0) {
          yBolinha = 20; // Reseta a posição da bolinha se ela sair da tela
        }
      }
    }
  }
}

function verColisaoMiranha() {
  // Verifica se o stage atual não é o Final Boss (stage = 4)
  if (stage !== 4) {
    for (let i = 0; i < miranhas.length; i++) {
      colidiu = collideRectCircle(miranhas[i].x, miranhas[i].y, 120, 80, xBolinha, yBolinha, diametro);
      if (colidiu) {
        miranhas[i].vivo = false; // Marca a miranha como morta
        miranhas[i].x = -500; // Move a miranha para fora da tela
        velXBolinha *= -1; // Inverte a direção horizontal da bolinha
        velYBolinha *= -1; // Inverte a direção vertical da bolinha
        somMiranha.play(); // Toca o som da miranha
        minhaVida += 1; // Incrementa a vida do jogador
      }
    }
  }
}

function verColisaoChefao() {
  // Verifica se o stage atual é o Final Boss (stage = 4)
  if (stage === 4) {
    for (let i = 0; i < chefaos.length; i++) {
      let colidiu = collideRectCircle(
        chefaos[i].x, chefaos[i].y, 120, 80, // Retângulo do chefão
        xBolinha, yBolinha, diametro // Círculo da bolinha
      );

      if (colidiu && chefaos[i].vivo) {
        chefaos[i].acertos++; // Incrementa o contador de acertos

        // Inverte a direção da bolinha
        velXBolinha *= -1;
        velYBolinha *= -1;

        somMiranha.play(); // Toca o som do chefão sendo atingido

        // Verifica se o chefão atingiu 10 acertos
        if (chefaos[i].acertos >= 5) {
          chefaos[i].vivo = false; // Marca o chefão como derrotado
          chefaos[i].x = -500; // Move o chefão para fora da tela
          chefeDerrotado = true; // Atualiza o estado geral
        }
      }
    }
  }
}



function incluiPontos() {
  textStyle(BOLD);
  fill(color(255, 255, 255));
  textAlign(CENTER);
  textSize(80);
  text(meusPontos, 300, 80);
}

function vidas() {
  textStyle(BOLD);
  fill(color(255, 255, 255));
  textAlign(RIGHT);
  textSize(20);
  text(minhaVida, 60, 40);
}

function pontosMaiorQueZeroVida() {
  return minhaVida > 0;
}

function pontosMaiorQueZeroPontos() {
  return meusPontos > 0;
}

function voltar() {
   yBolinha = 20;
  if (pontosMaiorQueZeroVida()) {
    minhaVida -= 1;
  }
}

function inicio() {
  background(imagemFundo);
  image (start, 190,120,250,150);
 
  textStyle (BOLD);
  fill (255,255,255);
  textSize (15);
  textAlign (CENTER);
  text("press ENTER to play",320,370);
}

function lose() {
  background(imagemFundo);
  textStyle(BOLD);
  fill(255, 255, 255);
  textSize(80);
  text("YOU LOSE", 520, 220);

  textStyle(BOLD);
  fill(255, 255, 255);
  textSize(20);
  text("press SPACE and try again", 450, 280);
  
  if (!somYouLose.isPlaying()) {
        somYouLose.play();
      }
    if (!somPerdeu.isPlaying()) {
        somPerdeu.play();
      }
}

function win() {
  background(imagemFundoF4);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Congratulations! You Win!", width / 2, height / 2);
  
  textStyle(BOLD);
  fill(255, 255, 255);
  textSize(20);
  text("press SPACE and try again", 310, 280);
  
     if (!somWin.isPlaying()) {
        somWin.play();
      }
}