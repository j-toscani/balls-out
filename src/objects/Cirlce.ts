export default class Circle {
    dx: number;
    dy: number;
    x: number; // position x-achsis
    y: number; // position y-achsis
    r: number; // radius
    color: string; // string representing a hex color
    hitWall: Boolean;
    hitBall: Boolean;
    constructor( r:number, color:string, attrs?:{ x?:number, y?:number, speed?:number, angle?: number}) {
        this.x = attrs?.x || r; // position x-achsis
        this.y = attrs?.y || r; // position y-achsis
        this.dx = Math.cos((attrs?.angle || 45) * Math.PI/180) * (attrs?.speed || 1);
        this.dy = Math.sin((attrs?.angle || 45) * Math.PI/180) * (attrs?.speed || 1);
        this.r = r; // radius
        this.color = color || '#fff'; // string representing a hex color
        this.hitWall = false;
        this.hitBall = false;
    }

    setRandomPosition(width:number, height:number) {
        const x = Math.floor(Math.random() * (width - (this.r * 2))) + this.r;
        const y = Math.floor(Math.random() * (height - (this.r * 2))) + this.r;

        this.x = x;
        this.y = y;
    }

    reverseDy() {
        this.hitWall = true;
        this.dy = -this.dy;

        setTimeout(() => this.hitWall = false, 100)
    }
    reverseDx() {
        this.hitWall = true;
        this.dx = -this.dx;

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