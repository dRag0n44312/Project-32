class SlingShot{
constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 20
}        
this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);
}
   attach(body){
        this.sling.bodyA = body;
    }
display(){
      
    if (this.body.speed<3) {
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility)
      rect(999,999,this.width, this.height);
      pop();

    }
  }


fly(){
this.sling.bodyA = null;
}

display(){        
if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(4);
    fill("red");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}

}
