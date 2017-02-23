<template>
  <div>
    <header-conta-azul />
    <div class='wrapper'>
      <div class='show-car'>
        <h1 class='title'>{{ car.marca }} - {{ car.modelo }}</h1>

        <form-errors :errors='errors' />

        <form-car :values='{
            modelo: car.modelo,
            marca: car.marca,
            placa: car.placa,
            valor: car.valor,
            combustivel: car.combustivel,
            imagem: car.imagem
          }'
          messageSubmit='Salvar'
          :submitCallback='editCar' />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import FormCar from 'components/cars/FormCar'
  import FormErrors from 'components/shared/FormErrors'

  export default {
    name: 'show-car',
    components: {
      HeaderContaAzul,
      FormCar,
      FormErrors
    },
    computed: mapState('cars', {
      car: state => state.showCar,
      errors: state => state.errors
    }),
    methods: mapActions('cars', [
      'showCar',
      'editCar'
    ]),
    created () {
      this.showCar(this.$route.params.id)
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .show-car {
    margin-top: 20px;
    padding: 0 $side-default-padding;
  }
</style>
