<template>
  <div class='wrapper'>
    <header-conta-azul></header-conta-azul>
    <car-navigation />
  </div>
</template>

<script>
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import CarNavigation from 'components/cars/CarNavigation'

  export default {
    name: 'hello',
    components: {
      HeaderContaAzul,
      CarNavigation
    }
  }
</script>
