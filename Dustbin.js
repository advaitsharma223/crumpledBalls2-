class Dustbin{

    constructor(x, y, width, height) {

       
        this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
        World.add(world, this.body);
    }
}