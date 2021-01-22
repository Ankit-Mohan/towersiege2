class Box
{
    constructor (x,y,width ,height)
    {
        var options = 
        {
          restitution : 0.8,
          friction : 1.0,
          isStatic : false

        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width =width;
    this.height=height;
    this.visibility=255;
    }
    
display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    Matter.Body.setStatic(this.body,false);
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode (CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
    if(this.body.speed<3)
    {
    console.log(this.body.speed);
    }
    else
    {
    World.remove(world,this.body);
    push();
    this.visiblity=this.visiblity-5;
    tint(255,this.visiblity);
    pop();
    }
}

}