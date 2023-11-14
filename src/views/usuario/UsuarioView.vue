<template>
  <div>
    <h1 class="title">
      Seja bem vindo, <span>{{ $store.state.usuario }}</span
      >!
    </h1>
  </div>
</template>

<script>
export default {
  name: 'UsuarioView',
}
</script>

<style scoped>
span {
  font-weight: 300;
}
</style>
