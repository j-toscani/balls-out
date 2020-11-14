<template>
  <div class="home__container">
    <canvas width="800" height="600" ref="game_canvas" />
    <div class="home__buttons-container">
      <button @click="addCircle(10)">small</button>
      <button @click="addCircle(25)">medium</button>
      <button @click="addCircle(50)">big</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Circle from "../objects/Cirlce";

export default defineComponent({
  name: "Home",
  data(): {
    oldTime: number;
    canvas: undefined | HTMLCanvasElement;
    ctx: undefined | CanvasRenderingContext2D;
    circles: Circle[];
  } {
    return {
      oldTime: Date.now(),
      canvas: undefined,
      ctx: undefined,
      circles: [],
    };
  },
  methods: {
    draw() {
      if (!this.ctx) {
        return;
      }
      this.ctx.clearRect(0, 0, 800, 600);
      this.circles.forEach((circle: Circle) => {
        this.paintCircle(this.ctx as CanvasRenderingContext2D, circle);
      });
      const newTime = Date.now();
      const oldTime = this.oldTime;

      const timePassed = (newTime - oldTime) / 1000;

      const circles = this.circles.map((circle: Circle, index) => {
        this.checkCollision(circle, index);
        circle.update(timePassed);
        return circle;
      });

      this.oldTime = newTime;

      window.requestAnimationFrame(this.draw);
    },
    addCircle(r: number) {
      const circle: Circle = new Circle(10, "#fff");
      const circles: Circle[] = [...this.circles, circle];
      this.circles = circles;
    },

    paintCircle(ctx: CanvasRenderingContext2D, circle: Circle) {
      ctx.fillStyle = circle.color;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
      ctx.fill();
    },

    checkCollision(circle: Circle, index: number) {
      const hitLeft = !circle.hitWall && circle.x - circle.r < 0;
      const hitRight = !circle.hitWall && circle.x + circle.r > 800;
      const hitTop = !circle.hitWall && circle.y - circle.r < 0;
      const hitBottom = !circle.hitWall && circle.y + circle.r > 600;

      if (hitRight) {
        circle.hitAWall("right");
      }
      if (hitBottom) {
        circle.hitAWall("bottom");
      }
      if (hitLeft) {
        circle.hitAWall("left");
      }
      if (hitTop) {
        circle.hitAWall("top");
      }
      // get relevant circles
      // remove circle to check and circles that were allready checked
      const circles = this.circles.slice(0).splice(0, index);

      // check collision for circle with other relevant circles
      for (let checkIndex = 0; checkIndex < circles.length; checkIndex++) {
        const collisionCircle = circles[checkIndex];
        const distancex = circle.x - collisionCircle.x;
        const distancey = circle.y - collisionCircle.y;
        const distance = Math.sqrt(
          distancex * distancex + distancey * distancey
        );
        if (distance < circle.r + circle.r) {
          circle.hitABall(collisionCircle, true);
          const collisionIndex = this.circles.findIndex(
            (circle) => circle.x === collisionCircle.x
          );
          if (collisionIndex !== -1) {
            this.circles[collisionIndex].hitABall(circle, false);
          }
        }
      }
    },
  },

  mounted() {
    try {
      this.canvas = this.$refs.game_canvas as HTMLCanvasElement;
      this.ctx = this.canvas.getContext("2d") || undefined;

      if (!this.ctx) {
        alert("Game wont work. No Rendering Context!");
      }
    } catch (err) {
      console.log(err);
    }

    let circles = [];
    const array = new Array(10);

    for (let index = 0; index < array.length; index++) {
      const circle = new Circle(20, "#000", { speed: 100 });
      circle.setRandomPosition(800, 600);
      circle.setRandomAngle();
      circles.push(circle);
    }

    this.circles = circles;
    console.log(this.circles);
    window.requestAnimationFrame(this.draw);
  },
  beforeUnmount() {},
});
</script>

<style scoped>
canvas {
  background: lightgray;
}

.home__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  padding: 20px;
  height: 100%;
  width: 100%;
}

.home__buttons-container {
  margin: 20px;
  padding: 20px;
}

button {
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0px 20px;

  width: 100px;
}
</style>
