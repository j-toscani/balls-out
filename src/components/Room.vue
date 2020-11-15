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
      <span
        class="ready__display ready__display-other"
        :class="{
          ready: opponentReady,
        }"
      >
        Opponent</span
      >
    </div>
    <span class="ready__counter"> {{ count === 0 ? "Start!" : count }} </span>
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
      opponentReady: true,
      count: 3,
      runningCountDown: 0,
    };
  },
  watch: {
    gameReady() {
      if (this.gameReady) {
        this.startCountdown();
      } else {
        if (this.count) {
          clearTimeout(this.runningCountDown);
          this.count = 3;
          //cancel the countdown
        }
      }
    },
  },
  computed: {
    gameReady(): boolean {
      return this.ready && this.opponentReady;
    },
  },
  methods: {
    toggleReady() {
      this.ready = !this.ready;
      console.log("Room Entered");
    },
    startCountdown() {
      const timeout = setTimeout(() => {
        if (this.count > 0) {
          this.count--;
          this.runningCountDown = timeout;
          this.startCountdown();
        } else {
          this.$router.push("/rooms/" + 1);
        }
      }, 1000);
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

.ready__counter {
  color: rgba(var(--text-inverted));
}

.ready__display.ready {
  background: rgba(var(--success-100));
}
</style>
