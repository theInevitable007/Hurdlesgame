var player;

function preload()
{
}

function setup() {
	createCanvas(500,500);
    database = firebase.database();
    var playerRef = database.ref('players/position');
    playerRef.on("value",readPosition);

    player = createSprite(250,250,50,10);
    player.shapeColor = "black";
  
}


function draw() {  

  drawSprites();

}

function readPosition(data){
  position = data.val();
  
  player.x = position.x;
  player.y = position.y;
}

function changePosition(x,y){
  database.ref('players/position').set({
      'x' : position.x + x,
      'y' : position.y + y

  })
}

function mousePressed(){

}