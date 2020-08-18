class Paper{

    constructor(x, y) {
       
        
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2,       
        }
    
     this.body = Bodies.circle(x, y, 30, options);

     World.add(world, this.body);
     
    }

    display() {

        var position = this.body.position
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y, 30, 30);
        
    }
}

