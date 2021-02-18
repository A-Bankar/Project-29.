class Polygon
{
constructor(xInput,yInput,radius)
{
var options = {
    isStatic:true,
    restitution:0.2,
    friction:0.5,
    density:1.2,
    angularVelocity:0

}
this.x = xInput;
this.y = yInput;
this.r = radius;
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
this.image = loadImage("polygon.png");
this.visibility = 0;

World.add(userWorld,this.body);

}
display()
{
var paperpos = this.body.position;

push();
translate(paperpos.x,paperpos.y);
imageMode(CENTER); 
image(this.image, 0, 0, this.width, this.height);strokeWeight(3);
fill("yellow");
ellipse(0,0,this.r,this.r)
pop();

}
}