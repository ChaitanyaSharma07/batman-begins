class Rain {
    constructor(x, y, radius) {
        var options = {
          
    
        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        stroke("blue");
        fill("blue");
        ellipseMode(CENTER)
        ellipse(0, 0, this.radius, this.radius);
        

        pop();
    }

    update() {
        if (this.body.position.y > 600) {
            Matter.Body.setPosition(this.body, {x: random(10, 590), y: 0})
        }
    }
} 