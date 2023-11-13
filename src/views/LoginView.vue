<template>
  <section class="login">
    <h1 class="title">Login</h1>

    <form class="form-login">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>

    <p class="perdeu">
      <a href="/" target="_blank"> Perdeu a senha? Clique aqui. </a>
    </p>

    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from '@/components/LoginCriar.vue'

export default {
  name: 'LoginView',
  components: { LoginCriar },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    logar() {
      this.$emit('logar', this.login)
    },
  },
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

.form-login {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
