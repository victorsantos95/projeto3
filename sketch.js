   let cor;
   let cy;
   let cxl; 

function setup() {
    createCanvas(600, 500);
    background("black");
    cor = color (random(0, 255), random(0, 255), random(0,255));
    cy = [random(height),random(height),random(height)]
    cx = [0,0,0];
}
    
function draw() {
    fill (cor);
  
  for(let quantos in cx){
    circle(cx[quantos],cy[quantos], 50);
    cx[quantos] += random(0,3);
    cy[quantos] += random(-3,3);
    
    if (cx[quantos] >= width){
      cx[quantos] =0;
      cy[quantos] = random(height);
    }
  }
    if (mouseIsPressed) {
    cor = color (random(0, 255), random(0, 255), random(0,255),
random(0, 100));
}
  
  
  }
