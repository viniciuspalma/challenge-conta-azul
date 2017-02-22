<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    methods: mapActions([
      'getCars'
    ]),
    created () {
      this.getCars()
    }
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
    background: $background;
    color: $text;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    font-family: inherit;
  }

  a {
    color: $conta-azul-blue;
  }

  .wrapper {
    width: 1024px;
    margin: 0 auto;
  }
</style>
