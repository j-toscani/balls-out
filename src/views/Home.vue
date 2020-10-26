<template>
  <div class="home__container">
    <canvas width="800" height="600" ref="game_canvas" />
    <div class="home__buttons-container">
      <button>small</button>
      <button>medium</button>
      <button>big</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface CanvasCircle {
  x: number; // position x-achsis
  y: number; // position y-achsis
  dx: number; // direction x-achsis
  dy: number; // direction y-achsis
  r: number; // radius
  color: string; // string representing a hex color
}

export default defineComponent({
  name: "Home",
  data(): {
    canvas: undefined | HTMLCanvasElement;
    ctx: undefined | CanvasRenderingContext2D;
    circles: CanvasCircle[];
  } {
    return {
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

      this.circles.forEach((circle: CanvasCircle) => {
        this.paintCircle(this.ctx as CanvasRenderingContext2D, circle);
      });

      const circles = this.circles.map((circle: CanvasCircle) =>
        this.prepareNextFrame(circle)
      );

      window.requestAnimationFrame(this.draw);
    },
    createRandomCircles(n: number) {
      const circles = [];

      for (let index = 0; index < n; index++) {
        const randomx = Math.floor(Math.random() * 600) + 100;
        const randomy = Math.floor(Math.random() * 400) + 100;

        const circle = {
          x: randomx,
          y: randomy,
          dx: 1,
          dy: 1,
          r: 10,
          color: "#000",
        };

        circles.push(circle);
      }

      return circles;
    },
    paintCircle(ctx: CanvasRenderingContext2D, circle: CanvasCircle) {
      ctx.fillStyle = circle.color;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
      ctx.fill();
    },
    prepareNextFrame(circle: CanvasCircle) {
      const hitLeft = circle.x - circle.r < 0;
      const hitRight = circle.x + circle.r > 800;
      const hitTop = circle.y - circle.r < 0;
      const hitBottom = circle.y + circle.r > 600;

      if (hitLeft) {
        circle.dx = 1;
      }
      if (hitRight) {
        circle.dx = -1;
      }
      if (hitTop) {
        circle.dy = 1;
      }
      if (hitBottom) {
        circle.dy = -1;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;

      return circle;
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
    this.circles = this.createRandomCircles(50);
    window.requestAnimationFrame(this.draw);
  },
  beforeDestroy() {},
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
