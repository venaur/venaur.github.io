var canvas
var inc = 0.5;//higher the inc, the more we "zoom out"
var xoff;
var yoff;
var zoff = 0;

var scale;
var cols;
var rows;

var particles = [];
var flowField;

function windowResized(){
    resizedCanvas(windowWidth, windowHeight);
    resizedCanvas.position(100,100);
}

function setup()
{
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('position', 'fixed');
    canvas.style('z-index', '-1');
    noFill();
    // createCanvas(1024,512);
    scale = 50;
    cols = floor(width/scale);
    rows = floor(height/scale);
    
    flowField = new Array(cols * rows);
    
    for(var i = 0; i < 2000; i++)
    { 
        particles[i] = new Particle();
    }
       background(0);
}

function draw()
{
    yoff = 0;
    loadPixels();
    for(var y = 0; y < rows; y++)
    { 
        xoff = 0;
        for(var x = 0; x < cols; x++)
        { 
            var index = (x + y * cols);
            flowField[index] = v;
            
            var angle = noise(xoff,yoff,zoff) * TWO_PI * 4;//I can also do TWO_PI * 4 to make more 'noise' or more complex
            var v = p5.Vector.fromAngle(angle);
            v.setMag(5); //speed. the higher, the more it flows together, it's like a force 
             
            xoff += inc;
            stroke(0,0,0);
            strokeWeight(1);
            
        }
        yoff += inc;
        
        zoff += 0.003;
    }
    
    for(var i = 0; i < particles.length; i++)
    { 
        particles[i].follow(flowField);
        particles[i].update();
        particles[i].edge();
        particles[i].show();
    
    }
    
}