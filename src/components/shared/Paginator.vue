<template>
  <ul class='paginator'>
    <li class='item'>
      <a href='#'> &laquo; </a>
    </li>
    <li class='item'>
      <a href='#'>1</a>
    </li>
    <li class='item'>
      <a href='#'>2</a>
    </li>
    <li class='item'>
      <a href='#'>3</a>
    </li>
    <li class='item'>
      <a href='#'> &raquo; </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'paginator'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .paginator {
    display: block;
    list-style: none;
    padding: 0;
    margin: 20px 0;
    text-align: center;
    font-size: 0;

    .item {
      display: inline-block;
      vertical-align: middle;
      margin-left: -1px;
      font-size: 14px;
      line-height: 40px;
      background: $white;
      border: solid 1px $border-color;
      color: $text;

      &:first-child,
      &:last-child {
        font-size: 24px;
        line-height: 34px;
      }

      &:first-child {
        border-radius: $border-radius-default 0 0 $border-radius-default;
      }


      &:last-child {
        border-radius: 0 $border-radius-default $border-radius-default 0;
      }

      &:hover {
        background: $background-hover;
      }

      &.active {
        background: $background-active;
        border-color: $border-color-active;
      }
    }

    a {
      display: block;
      text-decoration: none;
      height: 40px;
      width: 40px;
      line-height: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
    }
  }
</style>
