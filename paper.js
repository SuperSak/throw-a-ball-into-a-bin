class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body)
        this.r = r
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r, this.r)

    }
}