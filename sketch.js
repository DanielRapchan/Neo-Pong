function setup() {
  createCanvas(600, 400);
}

//Variáveis para mostrar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;s
let raio = diametro / 2;

//Variáveis para mover a bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis para mostrar a minha raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 8;
let alturaRaquete = 90;

//Variáveis para mostrar a raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErro = 0;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;

//Som
let raquetada;
let ponto;

function preload() {
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

//Opção Multiplayer
/*function movimentarRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 5;
  }
}*/

function mostrarBolinha() {
  circle (xBolinha, yBolinha, diametro);
}

function movimentarBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *=  -1;
      }
}

function mostrarRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentarMinhaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 5;
  }
  
  if (keyIsDown(83)) {
    yRaquete += 5;
  }
}

function colisaoBolinhaRaquete() {
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
    
  if (xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentarRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErro;
  calcularChanceDeErro();
}

function calcularChanceDeErro() {
  if (pontosOponente >= meusPontos) {
    chanceDeErro += 1
    if (chanceDeErro >= 50) {
    chanceDeErro = 80
    }
  } else {
    chanceDeErro -= 1
    if (chanceDeErro < 20) {
    chanceDeErro = 20
    }
  }
} 

function placar() {
  stroke(138, 43, 226);
  textAlign(CENTER);
  textSize(17);
  fill(color(0, 0, 0));
  rect(140, 10, 40, 20, 5);
  fill(255);
  text(meusPontos, 160, 26);
  fill(color(0, 0, 0));
  rect(420, 10, 40, 20, 5);
  fill(255);
  text(pontosOponente, 440, 26);
}

function fazerPontos() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }  
}

function bolinhaPresa() {
    if (xBolinha - raio < 0) {
      xBolinha = 23;
    }
    if (xBolinha + raio > 600) {
      xBolinha = 577;
    }
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  verificaColisaoBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarMinhaRaquete();
  colisaoBolinhaRaquete();
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarRaqueteOponente();
  placar();
  fazerPontos();
  bolinhaPresa();
}

