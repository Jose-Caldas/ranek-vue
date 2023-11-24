<template>
  <div class="container">
    <h1>Página não encontrada!</h1>
    <router-link class="home" to="/"> ⬅️ Voltar para a Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'PaginaNaoEncontradaView',
  created() {
    document.title = 'Página Não Encontrada'
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 20px;
}

h1 {
  font-size: 1.8rem;
}

.home {
  color: #87f;
  font-size: 1rem;
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 1rem;
  }
  .home {
    font-size: 0.8rem;
  }
}
</style>
