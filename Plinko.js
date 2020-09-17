class Plinko{
    constructor(x, y){
        var options = {
            isStatic:true,
            'restitution':9
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        fill(0);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10);
    }
}