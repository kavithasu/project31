class Particle{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(Random(0, 255),random(0, 255),random(0,255));
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}