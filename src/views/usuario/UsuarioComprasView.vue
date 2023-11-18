<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="compras-wrapper"
        v-for="(compra, index) in compras"
        v-bind:key="`compra-${index}`"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span> {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from '@/components/ProdutoItem.vue'
import { api } from '@/services'
import { mapState } from 'vuex'

export default {
  name: 'UsuarioComprasView',
  data() {
    return {
      compras: null,
    }
  },
  components: {
    ProdutoItem,
  },
  computed: {
    ...mapState(['login', 'usuario']),
  },
  methods: {
    getCompras() {
      api.get(`/transacao?comprador_id=${this.usuario.id}`).then((response) => {
        this.compras = response.data
      })
    },
  },
  watch: {
    login() {
      this.getCompras()
    },
  },
  created() {
    if (this.login) {
      this.getCompras()
    }
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.compras-wrapper {
  margin-bottom: 40px;
}

.vendedor {
  margin-top: 10px;
}

.vendedor span {
  color: #e80;
}
</style>
