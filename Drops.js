class Drops{
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.001,
        }
        this.r = 3;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        noStroke();
        fill(225)
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r, this.r)
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
        }
    }
};