<template>
  <header class='header'>
    <router-link :to="{ name: 'Home' }">
      <img src='~assets/conta-azul-logo-white.png' alt='logo Conta Azul white' />
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'header-conta-azul'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .header {
    padding: 0 $side-default-padding;
    height: 50px;
    background: $conta-azul-blue;

    a {
      text-indent: -9999px;
    }

    img {
      height: 14px;
      max-width: 100%;
      margin: 18px 0;
    }
  }
</style>
