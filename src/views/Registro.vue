<template>
  <div class="container" data-anima="top">
    <div class="container-login">
      <h1>Inscreva-se</h1>
      <div class="container-inputs">
        <div style="display: grid">
          <label for="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome completo"
            v-model="email"
          />
        </div>
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
        <p @click="redirect">Já tenho conta</p>
        <button>Cadastrar</button>
      </div>
    </div>
    <DefaultTemplate />
  </div>
</template>

<script>
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
      this.$router.push({ name: "home" });
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
