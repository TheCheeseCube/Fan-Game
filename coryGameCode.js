//Cory's Game!!

//sprites and animations

var score=0;

var cory;
cory.createSprite(200,350);
cory.setAnimation("cory1.png");
cory.visible=false;

var start=createSprite(200,200);
start.setAnimation("start");
start.visible=true;

var meme=createSprite(randomNumber(0,400),randomNumber(-20,-10));
meme.setAnimation("meme1.png");
meme.visible=false;

var meme2=createSprite(randomNumber(0,400),randomNumber(-20,-10));
meme.setAnimation("meme2.jpg");
meme2.visible=false;

var bad=createSprite(randomNumber(0,400),randomNumber(-20,-10));
bad.setAnimation("bad.png");
bad.visible=false;

//update sprites
function draw(){
	
	backUp();
	start();
	score();
	coryMove();
	spriteChange();
	drawSprites();
}

//functions

function backUp(){
	if(bad.y>=400){
bad.y=randomNumber(-20,-10);
bad.x=randomNumber(0,400);
	}

	if(meme.y>=400){
	meme.y=randomNumber(-20,-10);
meme.x=randomNumber(0,400);
	}

	if(meme2.y>=400){
	meme2.y=randomNumber(-20,-10);
meme2.x=randomNumber(0,400);
	}
}

function score(){
	if(cory.isTouching(meme))
	meme.y=randomNumber(-20,-10);
meme.x=randomNumber(0,400);
score=score+1;

if(cory.isTouching(meme2)){
	meme2.y=randomNumber(-20,-10);
meme2.x=randomNumber(0,400);
score=score+1;
}

if(cory.isTouching(bad)){
	bad.y=randomNumber(-20,-10);
bad.x=randomNumber(0,400);
score=score-2;

fill("black");
text("Score:",10,10);
text(score,20,10);
}

function start(){
	if(keyDown("space")){
	start.visible=false;
	bad.visible=true;
	meme.visible=true;
	meme2.visible=true;
	cory.visible=true;
	bad.velocityY=3;
	meme.velocityY=3;
	meme2.velocityY=3;
	}
}

}

function coryMove(){
	if(keyDown("left")){
	cory.x=cory.x-3;
	}

	if(keyDown("right")){
	cory.x=cory.x+3;
	}
}

function spriteChange(){
	if(score>10){
	cory.setAnimation("cory1");
	}

	if(score==11){
	cory.setAnimation("cory2");
	}

	if(score==12){
	cory.setAnimation("cory2");
	}

	if(score==13){
	cory.setAnimation("cory2");
	}

	if(score==14){
	cory.setAnimation("cory2");
	}

	if(score==15){
	cory.setAnimation("cory2");
	}

	if(score==16){
	cory.setAnimation("cory2");
	}

	if(score==17){
	cory.setAnimation("cory2");
	}

	if(score==18){
	cory.setAnimation("cory2");
	}

	if(score==19){
	cory.setAnimation("cory2");
	}

	if(score==20){
	cory.setAnimation("cory3");
	}

	if(score==21){
	cory.setAnimation("cory3");
	}

	if(score==22){
	cory.setAnimation("cory3");
	}

	if(score==23){
	cory.setAnimation("cory3");
	}

	if(score==24){
	cory.setAnimation("cory3");
	}

	if(score==25){
	cory.setAnimation("cory3");
	}

	if(score==26){
	cory.setAnimation("cory3");
	}

	if(score==27){
	cory.setAnimation("cory3");
	}

	if(score==28){
	cory.setAnimation("cory3");
	}

	if(score==29){
	cory.setAnimation("cory3");
	}

	if(score>=30){
	cory.setAnimation("cory4");
	}
}