<template>
  <main
    class="flex-grid__container-row content__container home__main-container"
  >
    <form
      id="login-and-register-form"
      autocomplete="off"
      @submit.prevent="handleFormSubmit"
    >
      <transition name="fade" mode="out-in">
        <div v-if="mode === 'Login'">
          <h2 class="login-register__headline">
            {{ mode }}
          </h2>
          <one-line-input
            type="text"
            v-model="username"
            data-name="username"
            dsp-name="Username"
          />
          <one-line-input
            type="password"
            data-name="password"
            v-model="passwordLogin"
            dsp-name="Password"
          />
          <button
            type="button"
            class="login-register__toggle-button"
            @click="enterRegister"
          >
            Click here to register now.
          </button>
        </div>
        <div v-else>
          <h2>
            {{ mode }}
          </h2>
          <one-line-input
            type="text"
            v-model="username"
            dsp-name="Username"
            data-name="username"
          />
          <one-line-input
            type="email"
            v-model="email"
            dsp-name="E-Mail"
            data-name="mail"
          />
          <one-line-input
            type="password"
            v-model="passwordRegister"
            dsp-name="Password"
            data-name="passwordRegister"
          />
          <one-line-input
            type="password"
            :pattern="passwordRegister"
            v-model="passwordRegisterConfirm"
            dsp-name="Confirm"
            data-name="passwordRegisterConfirm"
          />
          <button
            type="button"
            class="login-register__toggle-button"
            @click="enterLogin"
          >
            Click here to switch to Login.
          </button>
        </div>
      </transition>

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
    mode: "Login" | "Register";
    username: string;
    email: string;
    passwordLogin: string;
    passwordRegister: string;
    passwordRegisterConfirm: string;
  } {
    return {
      mode: "Login",
      username: "",
      email: "",
      passwordLogin: "",
      passwordRegister: "",
      passwordRegisterConfirm: "",
    };
  },
  methods: {
    handleFormSubmit() {
      if (this.mode === "Login") {
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
      this.$router.push("/Rooms");
    },
    handleRegister() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.passwordRegisterConfirm,
      };
      console.log(JSON.stringify(data));
      this.$router.push("/Rooms");
    },
    enterLogin() {
      this.mode = "Login";
    },
    enterRegister() {
      this.mode = "Register";
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

.login-register__headline {
  margin-top: unset;
}

form {
  min-width: 300px;
  padding: 1rem;
  border-radius: 10px;
  color: rgba(var(--primary-200));
  background: rgba(var(--primary-400));

  display: flex;
  flex-flow: column nowrap;
}

button[type="submit"] {
  background: rgba(var(--primary-200));
  color: rgba(var(--neutral-100));

  width: fit-content;
  margin: 0.5rem auto;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
}

button[type="button"] {
  color: rgba(var(--primary-200));
  padding-left: 0;
  padding-right: 0;
  margin: 1rem 0;

  background: transparent;
  border: none;
}
</style>
