export default class Circle {
    angle: number;
    speed: number;
    x: number; // position x-achsis
    y: number; // position y-achsis
    r: number; // radius
    color: string; // string representing a hex color
    hitWall: Boolean;
    hitBall: Boolean;
    constructor( r:number, color:string, attrs?:{ x?:number, y?:number, speed?:number, angle?: number}) {
        this.x = attrs?.x || r; // position x-achsis
        this.y = attrs?.y || r; // position y-achsis
        this.angle = attrs?.angle || 45;
        this.speed = attrs?.speed || 1;
        this.r = r; // radius
        this.color = color || '#fff'; // string representing a hex color
        this.hitWall = false;
        this.hitBall = false;
    }

    get dy() {
        return Math.sin(this.angle * Math.PI/180) * (this.speed)
    }
    get dx() {
        return Math.cos(this.angle * Math.PI/180) * (this.speed)
    }

    setRandomPosition(width:number, height:number) {
        const x = Math.floor(Math.random() * (width - (this.r * 2))) + this.r;
        const y = Math.floor(Math.random() * (height - (this.r * 2))) + this.r;

        this.x = x;
        this.y = y;
    }

    hitAWall(_dx:number, _dy:number) {
        const collisionAngle = (Math.atan2(_dx, _dy) * 180 / Math.PI) + 90;
        const angleDiff = collisionAngle - this.angle;
        this.angle = collisionAngle + angleDiff;

        this.hitWall = true;
        setTimeout(() => this.hitWall = false, 100)
    }

    createCircle(r: number = 10) {
        const randomx = Math.floor(Math.random() * 600) + 100;
        const randomy = Math.floor(Math.random() * 400) + 100;
  
        const randomdx = Math.random() * 2 - 1;
        const randomdy = Math.random() * 2 - 1;
  
        const circle = {
          x: randomx,
          y: randomy,
          dx: randomdx,
          dy: randomdy,
          r: r,
          color: "#000",
        };
  
        return circle;
    }
}