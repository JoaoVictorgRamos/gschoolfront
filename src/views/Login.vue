<template>
  <form class="container" data-anima="top" @submit.stop.prevent="onSubmit">
    <DefaultTemplate />
    <div class="container-login">
      <h1>Login</h1>
      <div class="container-inputs">
        <div style="display: grid">
          <label for="email">Endereço de e-mail</label>
          <input
            id="email"
            type="text"
            placeholder="email@mail.com.br"
            v-model="email"
          />
        </div>
        <div style="display: grid">
          <label for="password">Senha de acesso </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            v-model="password"
          />
        </div>
      </div>
      <div class="container-button">
        <p @click="redirect">Não tenho conta</p>
        <button type="submit">Acessar</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

import DefaultTemplate from "@/components/DefaultTemplate.vue";

export default {
  components: {
    DefaultTemplate,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Registro" });
    },
    onSubmit() {
      var link = "http://127.0.0.1:8000/api/login";
      var data = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(link, data)
        .then((response) => {
          console.log("response", response);
          this.$router.push({ name: "home" });
          var cookie = `access_token=${response.data.token_type} ${response.data.acess_token}`;
          document.cookie = cookie;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.container-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #81858e;
    font-size: 16px;
    cursor: pointer;
  }
}
label {
  margin-bottom: 10px;
}
.container-inputs {
  display: grid;
  gap: 15px;
}
.container-login {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}
.container {
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}
</style>
