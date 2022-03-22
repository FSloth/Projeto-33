class Plinko {
    constructor(x, y) {
        
        var options = {
            restitution: 0.4,
            friction: 0,
            isStatic:true   
        }
        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.Visiblity = 255;
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
       
        
        if(this.body.speed < 3){
            this.body
          }else{
            World.remove(world,this.body)
            this.Visible = this.Visible - 5;
            tint(255, this.Visible)
          }



        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
    
    

};