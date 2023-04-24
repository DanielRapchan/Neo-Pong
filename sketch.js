function setup() {
  createCanvas(600, 400);
}

//Variáveis para mostrar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Variáveis para mover a bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis para mostrar a minha raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 8;
let alturaRaquete = 90;

//Variáveis para mostrar a raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;

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
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
}

function colisaoBolinhaRaquete() {
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete)
    velocidadeXBolinha *= -1;
  if (xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente)
    velocidadeXBolinha *= -1;
}

function movimentarRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2 - 10;
  yRaqueteOponente += velocidadeYOponente;
}

function placar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
}

function fazerPontos() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
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
}

