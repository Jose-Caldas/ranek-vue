<template>
  <section class="produtos_container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        v-bind:src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <p class="preco">{{ produto.preco }}</p>
      <h2 class="title">{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from '@/services.js'
export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null,
    }
  },
  methods: {
    getprodutos() {
      api
        .get('/produto')
        .then((response) => {
          this.produtos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  created() {
    this.getprodutos()
  },
}
</script>

<style scoped></style>
