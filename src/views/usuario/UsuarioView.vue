<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }"> Produtos </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }"> Compras </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }"> Vendas </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }">
            Editar usuário
          </router-link>
        </li>
        <li>
          <button @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view to="/"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'UsuarioView',
  methods: {
    deslogar() {
      this.$store.dispatch('deslogarUsuario')
      this.$router.push('/login')
    },
  },
  created() {
    document.title = 'Ranek | Usuário'
  },
}
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 20px;
    padding: 20px;
  }
}

.sidenav a,
button {
  padding: 10px;
  background: #f7f4fc;
  display: block;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: all 0.3s;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  cursor: pointer;
}
</style>
