function Particle()
{
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(0,0);
   // this.vel = p5.Vector.random2D(); //velocity
    this.acc = createVector(0,0); //acceleration
    this.maxSpeed = 1;
    
    this.prevPos = this.pos.copy();
    
this.update = function()
{
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
}

this.follow = function(vectors)
{
    //based on that x,y pos, look up cooresponding vector and apply vector as a force 
    var x = floor(this.pos.x / scale);
    var y = floor(this.pos.y / scale);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
}

this.applyForce = function(force)
{
    this.acc.add(force);
}
    
this.show = function() //draws it
{
    stroke(200, 8);
    //was 44,2,2
    strokeWeight(1);
    line(this.pos.x, this.pos.y, 
         this.prevPos.x, this.prevPos.y);
    //point(this.pos.x, this.pos.y);

    this.updatePrev();
}

this.updatePrev = function()
{
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
}
this.edge = function()
{
    if(this.pos.x > width){
        this.pos.x = 0;
        this.updatePrev();
    } 
    
    if(this.pos.x < 0){  
        this.pos.x = width;
        this.updatePrev();
     }
    
    if(this.pos.y > height){ 
        this.pos.y = 0;
        this.updatePrev();
    } 
    
    if(this.pos.y < 0) {
        this.pos.y = height;
        this.updatePrev();
    }
}
}












