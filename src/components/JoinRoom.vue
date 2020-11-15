<template>
  <button
    class="room__container"
    :class="{
      full: isFull,
    }"
    @click="enterRoom"
  >
    <span class="room__name">
      {{ room.name }}
    </span>
    <span class="room__indicator">{{ room.users.length + " / " + 2 }}</span>
  </button>
</template>

<script lang="ts">
import { Room } from "../../types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "JoinRoom",
  props: {
    room: {
      type: Object as PropType<Room>,
      default: () => {
        return {
          id: 1,
          name: "New Room",
          users: [
            { id: 1, nickname: "Hans", mail: "hans@gmail.com" },
            { id: 2, nickname: "Franz", mail: "franz@gmx.com" },
          ],
        };
      },
    },
  },
  computed: {
    isFull(): boolean {
      return this.room.users.length === 2;
    },
  },
  methods: {
    enterRoom() {
      console.log("Room Entered");
    },
  },
});
</script>

<style scoped>
.room__container {
  display: flex;
  justify-content: space-between;
  flex-direction: row nowrap;

  position: relative;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  background: rgba(var(--primary-400));

  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: rgba(var(--text-inverted));

  transition: box-shadow var(--timing-3) ease-out;
}

.room__container.full {
  background: rgba(var(--primary-200));
  border: 1px solid rgba(var(--primary-400));
}

.room__container:hover {
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.room__indicator {
  color: rgba(var(--text-inverted));
  font-size: 0.8rem;
  padding: 0.25rem;
  border-radius: 5px;
  background: rgba(var(--primary-200));
}

.room__container.full > .room__indicator {
  background: rgba(var(--primary-200));
}
</style>
