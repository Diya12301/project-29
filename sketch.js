function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   
  stand= new Ground(300,350,300,20);

//level one
  block1=new Box(300,255,30,40);
  block2=new Box(310,255,30,40);
  block3=new Box(320,255,30,40);
  block4=new Box(330,255,30,40);
  block5=new Box(340,255,30,40);
  block6=new Box(350,255,30,40);
  block7=new Box(360,255,30,40);
//level two
block8=new Box(330,235,30,40);
block9=new Box(360,235,30,40);
block10=new Box(390,235,30,40);
block11=new Box(420,235,30,40);
block12=new Box(450,235,30,40);
//level three
block13=new Box(360,195,30,40);
block14=new Box(390,195,30,40);
block15=new Box(420,195,30,40);
//top
block16=new Box(390,155,30,40);



slingShot=new SlingShot(this.polygon,{x:100,y:200});

imageMode(CENTER);

image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function draw() {
  background(255,255,255); 
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}