<template>
  <button type='button' name='button' class='button'>
    Novo Carro
  </button>
</template>

<script>
  export default {
    name: 'new-car-button'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .button {
    background: $success;
    color: $white;
    font-size: 13px;
    font-weight: 600;
    padding: 12px 35px;
    border-radius: $border-radius-default;
  }
</style>
