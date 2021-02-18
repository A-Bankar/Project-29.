class Ground
{
constructor(xInput,yInput,widthInput,heightInput)
{
var options = {
    isStatic:true,
restitution:0

}
this.x = xInput;
this.y = yInput;
this.width = widthInput;
this.height = heightInput;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(userWorld,this.body);

}
display()
{
var groundpos = this.body.position;

push();
translate(groundpos.x,groundpos.y);
fill(69,420,892);
rect(0,0,this.width,this.height);
rectMode(CENTER);
strokeWeight(3);
pop();

}
}