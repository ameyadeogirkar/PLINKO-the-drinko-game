class Particle{
    constructor(x, y, radius){
        var options = {
            isStatic:false
        }
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}