<template>
  <section>
    <h1>👍Compre ou Venda👎</h1>
    <ProdutosBusca />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBusca from '@/components/ProdutosBusca.vue'
import ProdutosLista from '@/components/ProdutosLista.vue'
export default {
  name: 'HomeView',
  components: {
    ProdutosBusca,
    ProdutosLista,
  },
}
</script>

<style scoped>
h1 {
  color: #87f;
  font-size: 2rem;
  margin-top: 40px;
  text-align: center;
}
</style>
