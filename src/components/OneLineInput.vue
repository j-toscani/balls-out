<template>
  <div class="onelineinput__container" :class="state">
    <input
      class="onelineinput__input"
      v-bind="$attrs"
      :id="dataName"
      :name="dataName"
      @input="emitInput"
      :value="value"
    />
    <label class="onelineinput__label" :for="dataName">
      {{ dspName }}
    </label>
    <div class="onelineinput__feedback" v-if="errMessage">
      {{ errMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "OneLineInput",
  inheritAttrs: false,
  props: {
    errMessage: {
      type: String,
      default: "",
    },
    dataName: {
      type: String,
      required: true,
    },
    dspName: {
      type: String,
      required: true,
    },
    state: {
      type: String as PropType<"" | "warning" | "error" | "success">,
      default: "",
    },
    value: {},
  },
  methods: {
    emitInput(event: InputEvent) {
      this.$emit("input", (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style scoped>
.onelineinput__container {
  position: relative;

  display: flex;
  flex-flow: column;
  text-align: left;

  --state-color: rgba(var(--primary-200));
}

.onelineinput__input,
.onelineinput__container,
.onelineinput__container > label,
.onelineinput__container > .onelineinput__feedback {
  transition: all var(--timing-2) ease-out;
}

.onelineinput__container.warning {
  --state-color: rgba(var(--warning-200));
}
.onelineinput__container.success {
  --state-color: rgba(var(--success-300));
}
.onelineinput__container.error {
  --state-color: rgba(var(--error-100));
}

.onelineinput__label {
  order: -1;
  color: var(--state-color);
  font-size: 0.75rem;
}

.onelineinput__feedback {
  color: var(--state-color);
  font-size: 0.75rem;
}

.onelineinput__input {
  padding: 0.5rem 0.75rem;
  margin: 5px 0px;
  background: rgba(220, 220, 220);
  font-size: 1rem;
  border-radius: 5px;
  border: 1px var(--state-color) solid;
}

.onelineinput__input:required + label::after {
  content: "*";
}

.onelineinput__input:focus,
.onelineinput__input:hover {
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
}
</style>
