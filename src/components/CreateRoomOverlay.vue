<template>
  <div class="overlay__container z-10">
    <div class="overlay__backdrop z-20" @click="cancelCreation"></div>
    <div class="overlay__pop-up z-30">
      <h3>
        Give your Room a name
      </h3>
      <input type="text" class="onelineinput__input" />
      <div>
        <button type="button" @click="createRoom">Create</button>
        <button type="button" @click="cancelCreation">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateRoomButton",
  methods: {
    createRoom() {
      console.log("RoomCreated");
      this.$emit("clicked");
    },
    cancelCreation() {
      this.$emit("clicked");
    },
  },
});
</script>

<style scoped>
.overlay__pop-up {
  position: fixed;
  color: rgba(var(--text-inverted));
  background: rgba(var(--primary-100));
  padding: 1rem 2rem;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
}

h3,
button {
  margin: 1rem 0;
}

button {
  margin-right: 1rem;
}

.overlay__backdrop {
  position: fixed;
  filter: blur(20px);
  background: rgba(var(--primary-200), 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.onelineinput__input {
  padding: 0.5rem 0.75rem;
  margin: 5px 0px;
  background: rgba(220, 220, 220);
  font-size: 1rem;
  border-radius: 5px;
  border: 1px var(--state-color) solid;
}
</style>
