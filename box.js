class Box
{
constructor(xInput,yInput,widthInput,heightInput)
{
var options = {
    isStatic:false,
    restitution:0.2,
    friction:0,
    density:2
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
var boxpos = this.body.position;

push();
translate(boxpos.x,boxpos.y);
fill("blue");
rect(0,0,this.width,this.height);
rectMode(CENTER);
strokeWeight(3);
pop();

}
}