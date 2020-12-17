class Plinko{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.circlr(x,y,this.r,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        fill("pink");
        rect(pos.x,pos.y,this.width,this.height);
    }
}