<template>
  <div class='navigation'>
    <div class='button'>
      <new-car-button></new-car-button>
    </div>

    <div class='search'>
      <search-car></search-car>
    </div>
  </div>
</template>

<script>
  import NewCarButton from 'components/cars/NewCarButton'
  import SearchCar from 'components/cars/SearchCar'

  export default {
    name: 'car-navigation',
    components: {
      NewCarButton,
      SearchCar
    }
  }
</script>

<style scoped lang='scss'>
  @import '~styles/_variables.scss';

  .navigation {
    margin: 20px 0;
    padding: 0 $side-default-padding;

    .button {
      float: left;
    }

    .search {
      float: right;
    }
  }
</style>
