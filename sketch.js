var bg, iss,iss1, dock;

function preload(){
bg=loadImage("spacebg.jpg")
iss=loadImage("iss.png");
s1=loadImage("spacecraft1.png");
s2=loadImage("spacecraft2.png");
s3=loadImage("spacecraft3.png");
s4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-120);

  iss1=createSprite(displayWidth/2+200, displayHeight/2-100, 50, 50);
  iss1.addImage(iss);
  iss1.scale=0.9;

  sp=createSprite(displayWidth/2-200, displayHeight/2+100, 50, 50);
  sp.addImage(s1);
  sp.scale=0.25;  

  dock=createSprite(displayWidth/2+145, displayHeight/2-75,25,25)
  dock.visible=false;
}

function draw() {
  background(bg); 

  if(keyDown("LEFT_ARROW")){
    sp.x-=10
    sp.addImage(s3)
  }
  if(keyDown("RIGHT_ARROW")){
    sp.x+=10
    sp.addImage(s4)
  }
  if(keyDown("DOWN_ARROW")){
    sp.y+=10
    sp.addImage(s2)
  }
  if(keyDown("UP_ARROW")){
    sp.y-=10
    sp.addImage(s2)
  }
  
if(sp.isTouching(dock)){
sp.x=displayWidth/2+135;
sp.y=displayHeight/2+10;
sp.depth = iss1.depth;
iss1.depth=iss1.depth+1;
fill(225)
textSize(60)
text("DOCKING SUCCESSFUL!!",displayWidth/2-300,displayHeight-200)
}

  drawSprites();
}