class  Stone {
    constructor(x, y,r) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5,
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      //this.r = r;
      this.image = loadImage("images/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //fill("red");
      //rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.r*2, this.r*2);
      pop();
    }
  };