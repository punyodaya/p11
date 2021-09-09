
function preload(){
  //pre-load images
  trackImg=loadImage("path.png")
  boyImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200,400,400)
  track.addImage(trackImg)
  track.velocityY=4
  track.scale=0.95
  boy=createSprite(200,350,20,20)
  boy.addAnimation("boy running",boyImg)
  boy.scale=0.08
  left=createSprite(0,0,100,800)
  right=createSprite(400,0,100,800)
  left.visible=false
  right.visible=false

}

function draw() {
  background(0);
  boy.x=mouseX
  edges=createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(left)
  boy.collide(right)
  drawSprites()
  if(track.y>400){
     track.y=400/2
  }
}
