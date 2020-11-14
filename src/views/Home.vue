<template>
  <main
    class="flex-grid__container-row content__container home__main-container"
  >
    <form
      id="login-and-register-form"
      autocomplete="off"
      @submit.prevent="handleFormSubmit"
    >
      <transition>
        <div v-if="mode === 'login'">
          <one-line-input type="text" v-model="username" />
          <one-line-input type="password" v-model="passwordLogin" />
        </div>
        <div v-else>
          <one-line-input type="text" v-model="username" />
          <one-line-input type="email" v-model="email" />
          <one-line-input type="password" v-model="passwordRegister" />
          <one-line-input type="password" v-model="passwordRegisterConfirm" />
        </div>
      </transition>

      <button type="button" v-if="mode === 'register'" @click="enterLogin">
        Click here to switch to Login.
      </button>
      <button type="button" v-if="mode === 'login'" @click="enterRegister">
        Click here to register now.
      </button>

      <button form="login-and-register-form" type="submit">Submit</button>
    </form>
  </main>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import OneLineInput from "@/components/OneLineInput.vue";

export default defineComponent({
  name: "Home",
  components: {
    OneLineInput,
  },
  data(): {
    mode: "login" | "register";
    username: string;
    email: string;
    passwordLogin: string;
    passwordRegister: string;
    passwordRegisterConfirm: string;
  } {
    return {
      mode: "login",
      username: "",
      email: "",
      passwordLogin: "",
      passwordRegister: "",
      passwordRegisterConfirm: "",
    };
  },
  methods: {
    handleFormSubmit() {
      if (this.mode === "login") {
        this.handleLogin();
      } else {
        this.handleRegister();
      }
    },
    handleLogin() {
      const data = {
        username: this.username,
        password: this.passwordLogin,
      };
      console.log(JSON.stringify(data));
    },
    handleRegister() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.passwordRegisterConfirm,
      };
      console.log(JSON.stringify(data));
    },
    enterLogin() {
      this.mode = "login";
    },
    enterRegister() {
      this.mode = "register";
    },
  },
});
</script>

<style scoped>
.home__main-container {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
