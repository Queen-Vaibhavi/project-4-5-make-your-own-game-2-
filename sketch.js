var santa,santaImg;
var path,pathImage;
var giftImg;


function preload(){

santaImg = loadImage("images/santa character transparent.png");
pathImage = loadImage("images/snowy path.jpg");
giftImg = loadImage("images/gift.png");

}

function setup() {
  createCanvas(1400,680);

  path = createSprite(750,280,1500,680);
  path.addImage(pathImage);

  santa = createSprite(400, 450, 50, 50);
  santa.addImage(santaImg);
  santa.scale = 1.3;

  //creating groups
  giftsGroup = new Group();
}

function draw() {
  background(pathImage);  
  drawSprites();

  //giving velocity to path.
path.velocityX = -4;

if (path.x < 650) {
  path.x = path.width / 2;
}

//making slegge move like game
if (keyDown(UP_ARROW)) {
  if (santa.velocityY === 0) {
    santa.velocityY = -6;

  } else {
    santa.velocityY = 0;
  }
  
}


if (keyDown(DOWN_ARROW)) {
  if (santa.velocityY === 0) {
    santa.velocityY = 6;

  } else {
    santa.velocityY = 0;
  }

}

  spawnGift();

}

function spawnGift() {
  //write code here to spawn the gift
  if (frameCount % 300 === 0) {
    gift = createSprite(945, 70, 40, 40);
    gift.y = Math.round(random(200, 800));
    gift.addImage(giftImg);
    gift.scale = 0.6;
    gift.velocityX = -3;

    //assign lifetime to the variable
    gift.lifetime = 400;

    //adjust the depth
    gift.depth = santa.depth;
  

    //adding gift to the group
    giftsGroup.add(gift);
  }
}

//gifts collecting feature to be added later.
// gifts speed will be adjusted soon.