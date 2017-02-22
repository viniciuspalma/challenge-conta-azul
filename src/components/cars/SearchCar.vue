<template>
  <div class='search-car'>
    <input type='text'
      class='input'
      placeholder='Pesquisar'
      v-model='search' />

    <div class='icon'>
      <img src='~assets/icons/search.png' alt='Search icon' />
    </div>

    <transition name='fade'>
      <div class='hints' v-if='hasMatches()'>
        <ul class='hint-category' v-if='hasCombustivelMatches()'>
          <li class='hint-category-title'>
            Combustível
          </li>

          <li class='hint' v-for='matchHintCombustivel in matchHints.combustivel'>
            {{ matchHintCombustivel }}
          </li>
        </ul>

        <ul class='hint-category' v-if='hasMarcaMatches()'>
          <li class='hint-category-title'>
            Marca
          </li>

          <li class='hint' v-for='matchHintMarca in matchHints.marca'>
            {{ matchHintMarca }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'search-car',
    props: {
      hints: {
        type: Object,
        required: true
      }
    },
    computed: {
      matchHints () {
        return {
          combustivel: this.getMatches('combustivel'),
          marca: this.getMatches('marca')
        }
      }
    },
    methods: {
      hasMatches () {
        return this.hasCombustivelMatches() || this.hasMarcaMatches()
      },

      hasCombustivelMatches () {
        return this.matchHints.combustivel.length > 0
      },

      hasMarcaMatches () {
        return this.matchHints.marca.length > 0
      },

      getMatches (category) {
        if (this.search.length < 1) {
          return []
        }

        return _.filter(this.hints[category], hint => {
          return _.startsWith(_.toLower(hint), _.toLower(this.search))
        })
      }
    },
    data () {
      return {
        search: ''
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .search-car {
    position: relative;

    .input {
      border: solid 1px $border-color;
      width: 220px;
      height: 40px;
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
      border: solid 1px $border-color;
      width: 40px;
      height: 40px;
      background: $background-lighten;

      img {
        margin: 10px;
        height: 18px;
        max-width: 100%;
      }
    }

    .hints {
      text-align: left;
      position: absolute;
      top: calc(100% - 1px);
      right: 0;
      width: 220px;
      background: white;
      font-size: 14px;
      border: solid 1px $border-color;
      border-radius: 0 0 $border-radius-default $border-radius-default;
      max-height: 250px;
      overflow-x: auto;
      box-shadow: 0 1px 40px -12px #000;

      .hint-category {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .hint-category-title {
        background: $background-lighten;
        padding: 10px;
        font-size: 16px;
        border-top: solid 1px $border-color;
        border-bottom: solid 1px $border-color;
      }

      .hint {
        padding: 6px 10px;
        border-bottom: solid 1px $border-color;

        &:last-child {
          border: none;
        }
      }
    }
  }
</style>
