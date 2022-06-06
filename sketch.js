var caminho,boy, leftBoundary,rightBoundary;
var caminhoImg,boyImg;
var i;

function preload(){
caminhoImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
caminho=createSprite (200 , 200);
caminho.addImage(caminhoImg);
caminho.velocityY = 4
caminho.scale = 1.2;

//Criando menino que corre 
boy=createSprite(150,130);
boy.addImage("Runner-1.png");
boy.addImage("runner-2.png");

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite()
}


function draw() {
background(0);
caminho.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 



 drawSprites();

 }




