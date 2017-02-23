<template>
  <div>
    <header-conta-azul />
    <div class='wrapper'>
      <div class='new-car'>
        <h1 class='title'>Novo Carro</h1>

        <form-errors :errors='errors' />

        <form-car :values='values'
          messageSubmit='Criar novo carro'
          :submitCallback='createCar' />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import FormCar from 'components/cars/FormCar'
  import FormErrors from 'components/shared/FormErrors'

  export default {
    name: 'new-car',
    components: {
      HeaderContaAzul,
      FormCar,
      FormErrors
    },
    computed: mapState('cars', {
      errors: state => state.errors
    }),
    methods: mapActions('cars', [
      'createCar'
    ]),
    data () {
      return {
        values: {
          modelo: '',
          marca: '',
          placa: '',
          valor: '',
          combustivel: '',
          imagem: ''
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .new-car {
    margin-top: 20px;
    padding: 0 $side-default-padding;
  }
</style>
