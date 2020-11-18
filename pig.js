class Pig{
    constructor(x,y)
    {
        var options={
            restitution:0.2,
            density:0.1,
            friction:0.9
        }
        this.width=50;
        this.height=50;
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
       
    }
    display()
    {
    var pos=this.body.position; 
    var angle=  this.body.angle; 
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("pink");
    rect(0,0,this.width,this.height);
    pop();
    }
}