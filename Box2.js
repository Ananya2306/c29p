class Box2 extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(3);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
    }
}