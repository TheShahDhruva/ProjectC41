const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var floor, umbrella;
var drops = [];
var maxDrops = 200;
var thunder, ThunderA;


function preload(){
    thunder = loadAnimation("1.png", "2.png", "3.png", "4.png");
}

function setup(){
    var canvas = createCanvas(400, 600);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200, 400);
    if(frameCount%100 === 0){
    for(var i = 0; i < maxDrops; i ++){
        drops.push(new Drops(random(0, 400), random(0, 20)));
    }  
  }
    ThunderA = createSprite(random(0, 400), random(0, 50), 20, 20);
    ThunderA.addAnimation("animation", thunder);
    ThunderA.scale = random(0.3, 0.6);
  
}

function draw(){
    background(0,0,40);
    Engine.update(engine);
    umbrella.display();
    for(var j = 0; j < maxDrops; j++){
        drops[j].display();
        drops[j].update();
    }
    if(frameCount%40 === 0){
        ThunderA.destroy();

    }
    if(frameCount%50 === 0){
        ThunderA = createSprite(random(0, 400), random(0, 50), 20, 20);
    ThunderA.addAnimation("animation", thunder);
    ThunderA.scale = random(0.3, 0.6);
    }
    drawSprites();
    
}