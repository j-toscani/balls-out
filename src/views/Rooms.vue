<template>
  <main class="flex-grid__container-row content__container">
    <div class="rooms__top">
      <h1>Rooms</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic harum unde
        vel, officia dicta nulla numquam voluptas deleniti quae ullam illo
        sequi. Eos dolorum laborum assumenda dolorem. Qui, quos tempore.
      </p>
    </div>
    <ul class="flex-grid__container-row rooms__list" style="margin-bottom: 0">
      <li class="flex-grid__item rooms__list-item">
        <create-room @clicked="toggleOverlay" />
      </li>
    </ul>
    <ul class="flex-grid__container-row rooms__list">
      <li class="flex-grid__item rooms__list-item"><join-room /></li>
    </ul>
    <transition name="fade">
      <create-room-overlay v-show="overlayOpen" @clicked="toggleOverlay" />
    </transition>
  </main>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";

import JoinRoom from "@/components/JoinRoom.vue";
import CreateRoomOverlay from "@/components/CreateRoomOverlay.vue";
import CreateRoomButton from "@/components/CreateRoom.vue";

export default defineComponent({
  name: "Rooms",
  components: {
    JoinRoom,
    CreateRoomButton,
    CreateRoomOverlay,
  },
  data() {
    return {
      overlayOpen: false,
    };
  },
  methods: {
    toggleOverlay() {
      this.overlayOpen = !this.overlayOpen;
    },
  },
});
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
}

.flex-grid__item {
  --flex-item-width: 3;
}

.rooms__top {
  margin: 0 0.5rem;
  color: rgba(var(--text-inverted));
}

.rooms__list {
  width: 100%;
  padding: 0;
  list-style-type: none;
}

.rooms__list-item {
  --flex-item-width: 12;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .rooms__list-item {
    --flex-item-width: 6;
  }
}

@media (min-width: 1200px) {
  .rooms__list-item {
    --flex-item-width: 3;
  }
}

.flex-grid__item-12 {
  --flex-item-width: 12;
}
</style>
