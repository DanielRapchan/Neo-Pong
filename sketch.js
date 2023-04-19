//Variáveis para mostrar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 80;
let raio = diametro / 2;

//Variáveis para mover a bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis para mostrar a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 8;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

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

function mostrarRaquete() {
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
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
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  verificaColisaoBolinha();
  mostrarRaquete();
  movimentarMinhaRaquete();
  colisaoBolinhaRaquete();
}

