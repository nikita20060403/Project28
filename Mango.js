class Mango{
    constructor(x,y,radius){
        var options = {
            'isStatic':true,
            'restitution':true,
            'friction':1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        //translate(pos.x,pos.y);
        rectMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
}
}