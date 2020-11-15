<template>
  <ul class="flex-grid__container-row rooms__list">
    <li class="flex-grid__item rooms__list-item"><join-room /></li>
    <li class="flex-grid__item rooms__list-item">
      <join-room
        :room="{
          id: 1,
          name: 'New Room',
          users: [{ id: 1, nickname: 'Hans', mail: 'hans@gmail.com' }],
        }"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Room } from "../../types";
import { defineComponent, PropType } from "vue";
import JoinRoom from "@/components/JoinRoom.vue";

export default defineComponent({
  name: "RoomList",
  components: {
    JoinRoom,
  },
});
</script>
