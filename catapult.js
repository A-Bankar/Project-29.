class Catapult {
    constructor(bodyAInput, pointBInput) {
      //creation of constraint to hold body and attach it to slingshot
      var options = {
        bodyA: bodyAInput,
        pointB: pointBInput,
        stiffness: 0.2,
        length: 2,
      };
      this.bodyA = bodyAInput;
      this.pointB = pointBInput;

      this.sling1 = loadImage("sling3.png");
     
  
      this.constraint = Constraint.create(options);
      World.add(userWorld, this.constraint);
    }
    //function Definition to attach a body to the constraint
  
    attach(body)
    {
       this.constraint.bodyA = body;
    }
  
    //function Definition to detach a body from constraint
    detach() {
      this.constraint.bodyA = null;
    }
  
    display() {
     
      
      //display constraint(rubberband: 2 lines) only if bodyA is attached to it
      //i.e. this.constraint.bodyA != null
      if (this.constraint.bodyA) {
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
  
        push();
  
        //display of constraint to hold bird and attach it to slingshot
        stroke(69,420,69);
  
        
          strokeWeight(5);
          if (pointA.x < 220) {
            strokeWeight(5);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling1, pointA.x - 30, pointA.y - 10, 15, 30);
          } else {
            strokeWeight(2);
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling1, pointA.x + 25, pointA.y - 10, 15, 30);
          }
         
        
        pop();
      }
    }
  }