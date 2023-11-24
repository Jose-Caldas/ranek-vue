<template>
  <div>
    <section>
      <div v-if="produto" class="produto">
        <ul v-if="produto.fotos">
          <li
            class="fotos"
            v-for="(foto, index) in produto.fotos"
            v-bind:key="`foto-${index}`"
          >
            <img :src="foto.src" :alt="foto.titulo" />
          </li>
        </ul>
        <div class="info">
          <h1>{{ produto.nome }}</h1>
          <p class="preco">{{ produto.preco | formatPrice }}</p>
          <p class="descricao">{{ produto.descricao }}</p>
          <transition mode="out-in" v-if="produto.vendido === 'false'">
            <button class="btn" v-if="!finalizar" @click="comprarProduto">
              Comprar
            </button>
            <FinalizarCompra :produto="produto" v-else />
          </transition>
          <button class="btn" disabled v-else>Produto Vendido</button>
        </div>
      </div>
      <PaginaCarregando v-else />
    </section>
  </div>
</template>

<script>
import { api } from '@/services'
import FinalizarCompra from '@/components/FinalizarCompra.vue'

export default {
  name: 'ProdutoView',
  components: {
    FinalizarCompra,
  },
  props: ['id'],
  data() {
    return {
      produto: null,
      finalizar: false,
    }
  },
  methods: {
    comprarProduto() {
      this.finalizar = true
    },
    getProdutos() {
      api
        .get(`/produto/${this.id}`)
        .then((response) => {
          this.produto = response.data
          document.title = `Ranek | Produto - ${this.produto.nome}`
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  created() {
    this.getProdutos()
  },
}
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

@media screen and (max-width: 500px) {
  .produto {
    grid-template-columns: 1fr;
  }
}
</style>
