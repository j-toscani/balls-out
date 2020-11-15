<template>
  <button class="create-room-button__container" @click="emitClicked">
    <span>
      Create Room
    </span>
    <span class="create-room__add-icon">
      +
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateRoomButton",
  methods: {
    emitClicked() {
      this.$emit("clicked");
    },
  },
});
</script>

<style scoped>
.create-room-button__container {
  display: flex;
  justify-content: space-between;
  flex-direction: row nowrap;

  position: relative;
  background: rgba(var(--primary-200));
  border: rgba(var(--primary-300)) 1px solid;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;

  font-size: 1rem;
  height: 100%;
  width: 100%;
  color: rgba(var(--text-inverted));

  transition: box-shadow var(--timing-3) ease-out;
}

.create-room-button__container:hover {
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.create-room__add-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  font-size: 1.2rem;
  line-height: 1;
  border-radius: 50%;
  background: rgba(var(--primary-400));
}
</style>
