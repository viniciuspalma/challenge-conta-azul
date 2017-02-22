<template>
  <div class='navigation'>
    <div class='button-box'>
      <router-link :to="{ name: 'NewCar' }">
        <new-car-button/>
      </router-link>
    </div>

    <div class='search-box'>
      <search-car :hints="{
        combustivel: combustivel,
        marca: marca
      }" />
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapState } from 'vuex'
  import NewCarButton from 'components/cars/NewCarButton'
  import SearchCar from 'components/cars/SearchCar'

  export default {
    name: 'car-navigation',
    components: {
      NewCarButton,
      SearchCar
    },
    computed: mapState({
      combustivel: state => _.uniq(_.map(state.cars.all, 'combustivel')),
      marca: state => _.uniq(_.map(state.cars.all, 'marca'))
    })
  }
</script>

<style scoped lang='scss'>
  @import '~styles/_variables.scss';

  .navigation {
    margin: 20px 0;
    padding: 0 $side-default-padding;
    font-size: 0;

    .button-box,
    .search-box {
      display: inline-block;
      vertical-align: middle;
      width: 50%;
    }

    .button-box {
      text-align: left;
    }

    .search-box {
      text-align: right;
    }
  }
</style>
