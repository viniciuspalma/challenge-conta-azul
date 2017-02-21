<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang='scss'>
  @import 'styles/_variables.scss';

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text;
  }

  .wrapper {
    width: 980px;
    margin: 0 auto;
  }
</style>
