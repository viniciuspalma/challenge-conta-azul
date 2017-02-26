<template>
  <ul class='paginator'>
    <li class='item'>
      <router-link :to='{Name: pathName, query: { page: 1 }}'>
        &laquo;
      </router-link>
    </li>
    <li class='item' v-for='n in numberOfPages' v-bind:class='{active: isActive(n)}'>
      <router-link :to='{Name: pathName, query: { page: n }}'>
        {{ n }}
      </router-link>
    </li>
    <li class='item'>
      <router-link :to='{Name: pathName, query: { page: numberOfPages }}'>
        &raquo;
      </router-link>
    </li>
  </ul>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'paginator',
    props: {
      page: {
        type: Number,
        required: true
      },
      numberOfItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      },
      pathName: {
        type: String,
        required: true
      }
    },
    computed: {
      numberOfPages () {
        return _.ceil(this.numberOfItems / this.itemsPerPage)
      }
    },
    methods: {
      isActive (number) {
        if (this.page === undefined && number === 1) {
          return true
        }
        return number === this.page
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .paginator {
    display: block;
    list-style: none;
    padding: 0;
    margin: 30px 0;
    text-align: center;
    font-size: 0;

    a {
      background: $white;
      border: solid 1px $border-color;
      display: block;
      text-decoration: none;
      height: 40px;
      width: 40px;
      line-height: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
    }

    .item {
      position: relative;
      z-index: 10;
      display: inline-block;
      vertical-align: middle;
      margin-left: -1px;
      font-size: 14px;
      line-height: 40px;
      color: $text;

      &:first-child,
      &:last-child {
        font-size: 24px;
        line-height: 34px;
      }

      &:first-child {
        a {
          border-radius: $border-radius-default 0 0 $border-radius-default;
        }
      }

      &:last-child {
        a {
          border-radius: 0 $border-radius-default $border-radius-default 0;
        }
      }

      &:hover {
        a {
          background: $background-hover;
        }
      }

      &.active  {
        z-index: 20;

        a {
          background: $background-active;
          border: solid 1px $border-color-active;
        }
      }
    }
  }
</style>
