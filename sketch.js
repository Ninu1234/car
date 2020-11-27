var road;
var PC1;
var NPC1 =[];
var score = 0;
var userLives = 4;
var NPCImage,PCImage,heartImg,roadImg
var ouch,gameOver,win;

function preload(){
	NPCImage = loadImage("orange.png");
	PCImage = loadImage("red.png");
	heartImg = loadImage("heart.png");
	roadImg = loadImage("road4.png")
}

function setup(){
	createCanvas(800, 670);
	road = createSprite(400,300,600,600);
	road.addImage("road",roadImg);
	road.scale = 4;
	road.velocityY = 6;
	road.y = road.height/2;

	//Loading sounds
	ouch = loadSound("ouch1.mp3");
	gameOver = loadSound("gameOver.mp3");
	win = loadSound("win1.mp3");
	PC1 = new PC(260,500);
}

function draw(){
	background(0,0,0);
	if(road.y>450){
		road.y = road.height/2;
	}

	drawSprites();
    textSize(33);
	fill(rgb(64, 250, 18));
	text("Score: " + score, 645, 60);
	PC1.display();

	if (keyIsDown(RIGHT_ARROW)){
		PC1.right();
	}

	if (keyIsDown(LEFT_ARROW)){
		PC1.left();
	}

	if (World.frameCount % 200 === 0)	NPC1.push(new NPC(random(0, width-80),-20));

	for (var i = 0;i < NPC1.length ;i++){
		
		NPC1[i].display();
		NPC1[i].move();

		if (NPC1[i].isLeftBehindBy(PC1) && NPC1[i].isLeftBehind === false){
			score += 5;
			NPC1[i].isLeftBehind = true;
		}

		if (NPC1[i].collide(PC1)){
			ouch.play();
			NPC1.pop();
			score+= -5;
			userLives+=-1;
		}
		else if (NPC1[i].continue()) NPC1.pop();
	}
	for (var i = 0; i < userLives; i++)	image(heartImg, 10 + (i * 60),620,50,50);
	if (score > 50){
		noLoop();
		textSize(33);
		fill("violet");
		text("Well Done!", 260,300);
		win.play();
	}

	if (userLives === 0){
		noLoop();
		textSize(50);
		fill("red");
		text('GAME OVER!', 260,300);
		gameOver.play();
	}
}
