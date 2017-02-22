<template>
  <div class='wrapper'>
    <header-conta-azul />
    <car-navigation />
    <custom-table />
    <paginator />
  </div>
</template>

<script>
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import CarNavigation from 'components/cars/CarNavigation'
  import CustomTable from 'components/shared/table/CustomTable'
  import Paginator from 'components/shared/Paginator'

  export default {
    name: 'hello',
    components: {
      HeaderContaAzul,
      CarNavigation,
      CustomTable,
      Paginator
    }
  }
</script>
