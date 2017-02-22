<template>
  <div class='wrapper'>
    <header-conta-azul />
    <car-navigation />
    <custom-table />
  </div>
</template>

<script>
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import CarNavigation from 'components/cars/CarNavigation'
  import CustomTable from 'components/shared/table/CustomTable'

  export default {
    name: 'hello',
    components: {
      HeaderContaAzul,
      CarNavigation,
      CustomTable
    }
  }
</script>
