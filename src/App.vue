<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    methods: mapActions('cars', [
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
    cursor: pointer;
    outline: 0;

    &:hover {
      box-shadow: 0 1px 20px -5px #000;
    }
  }

  a {
    color: $conta-azul-blue;
  }

  .wrapper {
    width: 1024px;
    margin: 0 auto;
  }

  .checkbox {
    position: relative;
    height: 20px;
    width: 20px;

    .input {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    .checkbox-style,
    .label {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
    }

    .label {
      display: inline-block;
      z-index: 20;
      opacity: 0;
      overflow: hidden;
    }

    .checkbox-style {
      z-index: 10;
      background: $white;
      border: solid 1px $border-color;
      border-radius: $border-radius-default;
    }

    .input:checked ~ .checkbox-style {
      border-color: $border-color-active;

      &::before {
        content: '';
        opacity: .5;
        width: 48px;
        height: 48px;
        position: absolute;
        top: -15px;
        left: -15px;
        transform: scale(.4);
        background-image: url('~assets/icons/check.png');
      }
    }
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
