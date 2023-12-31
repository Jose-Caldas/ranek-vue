<template>
  <section class="produtos_container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div class="produto" v-for="(produto, index) in produtos" :key="index">
          <router-link :to="{ name: 'produto', params: { id: produto.id } }">
            <img
              v-if="produto.fotos"
              v-bind:src="produto.fotos[0].src"
              :alt="produto.fotos[0].titulo"
            />
            <p class="preco">{{ produto.preco | formatPrice }}</p>
            <h2 class="product-title">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
        <ProdutosPaginar
          :produtosTotal="produtosTotal"
          :produtosPorPagina="produtosPorPagina"
        />
      </div>

      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem_resultado">
          Busca sem resultados. Tente buscar outro termo.
        </p>
      </div>

      <PaginaCarregando v-else key="carregando" />
    </transition>
  </section>
</template>

<script>
import { api } from '@/services.js'
import { serialize } from '@/helpers.js'
import ProdutosPaginar from '@/components/ProdutosPaginar.vue'

export default {
  name: 'ProdutosLista',
  components: {
    ProdutosPaginar,
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
    }
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)
      return `/produto?_limit=${this.produtosPorPagina}${query}`
    },
  },
  watch: {
    url() {
      this.getProdutos()
    },
  },
  methods: {
    getProdutos() {
      this.produtos = null
      window.setTimeout(() => {
        api
          .get(this.url)
          .then((response) => {
            this.produtosTotal = Number(response.headers['x-total-count'])
            this.produtos = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }, 1000)
    },
  },
  created() {
    this.getProdutos()
  },
}
</script>

<style scoped>
.produtos_container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

@media screen and (max-width: 768px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 10px;
  }
}
@media screen and (max-width: 500px) {
  .produtos {
    grid-template-columns: 1fr;
  }
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.product-title {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem_resultado {
  text-align: center;
}
</style>
