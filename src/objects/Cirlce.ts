export default class Circle {
  angle: number;
  speed: number;
  dy: number;
  dx: number;
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
    this.dx = Math.cos((this.angle * Math.PI) / 180) * this.speed;
    this.dy = Math.sin((this.angle * Math.PI) / 180) * this.speed;
    this.r = r; // radius
    this.color = color || "#fff"; // string representing a hex color
    this.hitWall = false;
    this.hitBall = false;
  }

  set velocity(angle: number) {
    this.dx = Math.cos((angle * Math.PI) / 180) * this.speed;
    this.dy = Math.sin((angle * Math.PI) / 180) * this.speed;
  }

  update(secondsPassed: number) {
    this.x += this.dx * secondsPassed;
    this.y += this.dy * secondsPassed;
  }
  setRandomPosition(width: number, height: number) {
    const x = Math.floor(Math.random() * (width - this.r * 2)) + this.r;
    const y = Math.floor(Math.random() * (height - this.r * 2)) + this.r;

    this.x = x;
    this.y = y;

    console.log(x, y);
  }

  setRandomAngle() {
    this.angle = Math.floor(Math.random() * 360);
  }

  hitAWall(side: "left" | "right" | "top" | "bottom") {
    if (side == "left" || side == "right") {
      this.dx = -this.dx;
    } else {
      this.dy = -this.dy;
    }

    this.hitWall = true;
    setTimeout(() => (this.hitWall = false), 100);
  }

  hitABall(ball: Circle, doNotCalcChange?: boolean) {
    if (!doNotCalcChange) {
      let vCollision = { x: ball.x - this.x, y: ball.y - this.y };
      let distance = Math.sqrt(
        (ball.x - this.x) * (ball.x - this.x) +
          (ball.y - this.y) * (ball.y - this.y)
      );

      let vCollisionNorm = {
        x: vCollision.x / distance,
        y: vCollision.y / distance,
      };

      let vRelativeVelocity = { x: ball.dx - this.dx, y: ball.dy - this.dy };
      let speed =
        vRelativeVelocity.x * vCollisionNorm.x +
        vRelativeVelocity.y * vCollisionNorm.y;

      ball.dx -= speed * vCollisionNorm.x;
      ball.dy -= speed * vCollisionNorm.y;
      this.dx += speed * vCollisionNorm.x;
      this.dy += speed * vCollisionNorm.y;
    }
    this.color = "#fff";
    this.hitBall = true;
    setTimeout(() => (this.hitBall = false), 200);
  }
}
