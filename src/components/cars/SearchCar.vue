<template>
  <div class='search'>
    <input type='text' class='input' placeholder='Pesquisar' />
    <div class='icon'>
      <img src='~assets/icons/search.png' alt='Search icon' />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-car'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .search {
    border: solid 1px $border-color;

    border-radius: $border-radius-default;

    height: 40px;
    position: relative;

    .input {
      width: 220px;
      height: 100%;
      border: none;
      background: $white;
      outline: 0;
      font-size: 13px;
      padding: 0 42px 0 15px;
      color: $text;
      font-weight: 200;
      border-radius: $border-radius-default;
    }

    .icon {
      border-radius:  0 $border-radius-default $border-radius-default 0;
      position: absolute;
      right: 0;
      top: 0;
      border-left: solid 1px $border-color;
      width: 40px;
      height: 100%;
      background: $background;

      img {
        margin: 10px;
        height: 18px;
        max-width: 100%;
      }
    }
  }
</style>
