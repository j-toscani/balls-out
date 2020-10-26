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

export default defineComponent({
  name: "Home",
  data(): {
    canvas: undefined | HTMLCanvasElement;
  } {
    return {
      canvas: undefined,
    };
  },
  mounted() {
    this.canvas = this.$refs.game_canvas as HTMLCanvasElement;
  },
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
