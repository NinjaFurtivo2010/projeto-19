var space,spaceImg
var rocket,rocketImg
var alien,alienImg
var coin,coinImg
var gameState = "play"
var alienGroup

function preload(){
spaceImg = loadImage("espaco.jpg")
rocketImg = loadImage("OIP.jpg")
alienImg = loadImage ("OIP_1.jpg")
}

function setup() {
 createCanvas(800,600)
 space = createSprite(0,0,1200,600)
 space.addImage("espaco",spaceImg)
 space.scale = 1.5

 alien = createSprite(300,400,30,30)
 alien.addImage("oip1",alienImg)
 alien.scale = 0.50
 alienGroup = new Group ()

 rocket = createSprite(200,400,30,30)
 rocket.addImage("oip",rocketImg)
 rocket.scale = 0.35
}

function draw() {
 background(100)


 if(gameState == "play"){
   

   
if(keyDown("space")){
 rocket.x = rocket.x -3
}

if(alienGroup.isTouching(rocket)){
gameState = "end"
}
 
createAlien()   
drawSprites()

}
if(gameState = "end"){
rocket.velocityY = 0
alien.velocityY = 0

}

}
function createAlien (){
if(frameCount % 150 === 0){
    alien = createSprite(300,400)
    alien.addImage("oip1",alienImg)
    alien.scale = 0.30
    alien.velocityY = +1
    alienGroup.add(alien)

}
}