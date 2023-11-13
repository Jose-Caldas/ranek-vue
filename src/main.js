import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PaginaCarregandoVue from './components/PaginaCarregando.vue'

Vue.config.productionTip = false

Vue.component('PaginaCarregando', PaginaCarregandoVue)

Vue.filter('formatPrice', (value) => {
  value = Number(value)

  if (!isNaN(value)) {
    return value.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
  } else {
    return ''
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
