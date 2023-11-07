let mb = []; //ARRAY DE IMAGENES ;)
let a; //declaro un objeto de la clase AVENTURA
let texto = [];
function setup() {
createCanvas(600,600);
a = new Aventura(mb,texto);

}


function draw() {
a.dibujar(mb,texto);

//a.actualizar();
}
function mousePressed() {
a.botonPresionado();
}
function preload() {
 for (let i = 0 ; i < 20; i++){
mb[i] = loadImage('assets/mb'+ i +'.png');
for (let x = 0 ; x < 16; x++){
 texto = loadStrings('assets/texto.txt');

}
}
}
