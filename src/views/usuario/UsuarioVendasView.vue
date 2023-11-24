<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div
        class="vendas-wrapper"
        v-for="(venda, index) in vendas"
        v-bind:key="`venda-${index}`"
      >
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="comprador">
            <span>Comprador:</span> {{ venda.comprador_id }}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="key">
              {{ key.charAt(0).toUpperCase() + key.slice(1) }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from '@/components/ProdutoItem.vue'
import { api } from '@/services'
import { mapState } from 'vuex'

export default {
  name: 'UsuarioVendasView',
  data() {
    return {
      vendas: null,
    }
  },
  components: {
    ProdutoItem,
  },
  computed: {
    ...mapState(['login', 'usuario']),
  },
  methods: {
    getVendas() {
      api.get(`/transacao?vendedor_id=${this.usuario.id}`).then((response) => {
        this.vendas = response.data
      })
    },
    toUpper(key) {
      key.charAt(0).toUpperCase() + key.slice(1)
    },
  },
  watch: {
    login() {
      this.getVendas()
    },
  },
  created() {
    if (this.login) {
      this.getVendas()
    }
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.vendas-wrapper {
  margin-bottom: 40px;
}

.comprador {
  margin-top: 10px;
}

.comprador span {
  color: #e80;
}

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

@media screen and (max-width: 768px) {
  .entrega {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

h3 {
  margin: 0;
  text-transform: capitalize;
}
</style>
