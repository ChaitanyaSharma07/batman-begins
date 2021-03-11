const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var manAnimation, man;
var rain;
var maxDrops = 100;
var drops = [];
var bg, bgImage;
var thunder;
var thunder1Image, thunder2mage, thunder3Image, thunder4Image;
var rand;
var thunderVisible = 0;
var thunderNotVisible = 12;
var thunderGroup;

function preload(){
    thunder1Image = loadImage("images/thunderbolt/1.png");
    thunder2Image = loadImage("images/thunderbolt/2.png");
    thunder3Image = loadImage("images/thunderbolt/3.png");
    thunder4Image = loadImage("images/thunderbolt/4.png");

}

function setup(){

    createCanvas(600, 600);

    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(300, 250, 60);

    if (frameCount % 20 == 0) {

        for (var i = 0;i < maxDrops; i++) {
            rain = new Rain(random(10, 590), random(10, 590), 5);
            drops.push(rain)
        }

    }


    thunderGroup = new Group();

}

function draw(){
    background(0, 0, 0);
    console.log(thunderVisible)

    Engine.update(engine);


    man.display();

    for (var i = 0; i < maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }

    //switch case for thunder images

    if (frameCount % 200 == 0) {
        thunderVisible = frameCount;
        thunder = createSprite(Math.round(random(0, 600)), random(0, 50), 1, 1);        
        

        rand = Math.round(random(1, 4));

        
        
        switch(rand) {
            case 1:
                thunder.addImage(thunder1Image);
                thunder.scale = random(0.5 , 1);
                break;

            case 2:
                thunder.addImage(thunder2Image);
                thunder.scale = random(0.5, 1);
                break;

            case 3:
                thunder.addImage(thunder3Image);
                thunder.scale = random(0.5, 1);
                break;

            case 4:
                thunder.addImage(thunder4Image);
                thunder.scale = random(0.5, 1);
                break;
        }

        thunderGroup.add(thunder);
        
    }

    if(thunderVisible + 10 == frameCount){
        thunderGroup.destroyEach();
    }
  
    drawSprites();  
}   


