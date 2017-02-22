<template>
  <header class='header'>
    <div class='wrapper'>

      <router-link :to="{ name: 'Home' }">
        <img src='~assets/conta-azul-logo-white.png' alt='logo Conta Azul white' />
      </router-link>

    </div>
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
    height: 50px;
    background: $conta-azul-blue;

    a {
      text-indent: -9999px;
    }

    .wrapper {
      padding: 0 $side-default-padding;
    }

    img {
      height: 14.5px;
      max-width: 100%;
      margin: 16px 0;
    }
  }
</style>
