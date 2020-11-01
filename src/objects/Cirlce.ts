export default class Circle {
  angle: number;
  speed: number;
  x: number; // position x-achsis
  y: number; // position y-achsis
  r: number; // radius
  color: string; // string representing a hex color
  hitWall: Boolean;
  hitBall: Boolean;
  constructor(
    r: number,
    color: string,
    attrs?: { x?: number; y?: number; speed?: number; angle?: number }
  ) {
    this.x = attrs?.x || r; // position x-achsis
    this.y = attrs?.y || r; // position y-achsis
    this.angle = attrs?.angle || 45;
    this.speed = attrs?.speed || 1;
    this.r = r; // radius
    this.color = color || "#fff"; // string representing a hex color
    this.hitWall = false;
    this.hitBall = false;
  }

  get dy() {
    return Math.sin((this.angle * Math.PI) / 180) * this.speed;
  }
  get dx() {
    return Math.cos((this.angle * Math.PI) / 180) * this.speed;
  }

  setRandomPosition(width: number, height: number) {
    const x = Math.floor(Math.random() * (width - this.r * 2)) + this.r;
    const y = Math.floor(Math.random() * (height - this.r * 2)) + this.r;

    this.x = x;
    this.y = y;
  }

  setRandomAngle() {
    this.angle = Math.floor(Math.random() * 360);
  }

  hitAWall(_dx: number, _dy: number) {
    const collisionAngle = (Math.atan2(_dx, _dy) * 180) / Math.PI + 90;
    const angleDiff = collisionAngle - this.angle;
    this.angle = (collisionAngle + angleDiff) % 360;

    this.hitWall = true;
    setTimeout(() => (this.hitWall = false), 100);
  }

  hitABall(ball: Circle) {
    let vCollision = { x: ball.x - this.x, y: ball.y - this.y };
    let distance = Math.sqrt(
      (ball.x - this.x) * (ball.x - this.x) +
        (ball.y - this.y) * (ball.y - this.y)
    );

    let vCollisionNorm = {
      x: vCollision.x / distance,
      y: vCollision.y / distance,
    };

    this.angle = Math.atan2(vCollisionNorm.x, vCollisionNorm.y) * 180;

    this.color = "#fff";
    this.hitBall = true;
    setTimeout(() => (this.hitBall = false), 100);
  }
}
