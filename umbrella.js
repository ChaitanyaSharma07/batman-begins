class Umbrella {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }

        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.image = loadImage("images/Walking Frame/walking_1.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        ellipseMode(RADIUS);
        imageMode(CENTER)
        image(this.image, pos.x, pos.y + 100, 450, 450)
    }
}