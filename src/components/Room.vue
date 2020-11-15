<template>
  <section class="room__container-ready">
    <button class="ready__button" @click="toggleReady">
      I am Ready
    </button>
    <div class="ready__display-container">
      <span
        class="ready__display ready__display-me"
        :class="{
          ready,
        }"
      >
        You
      </span>
      <span class="ready__display ready__display-other"> Opponent</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Room } from "../../types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Room",
  data() {
    return {
      ready: false,
      opponentReady: false,
    };
  },
  methods: {
    toggleReady() {
      this.ready = !this.ready;
      console.log("Room Entered");
    },
  },
});
</script>

<style scoped>
.ready__display-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;
}

.room__container-ready {
  margin: auto;
  width: 50%;
  min-height: 400px;
  min-width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.ready__display {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;

  color: rgba(var(--text-inverted));
  background: rgba(var(--warning-100));

  transition: background var(--timing-2) ease-out;
}

.ready__display.ready {
  background: rgba(var(--success-100));
}
</style>
