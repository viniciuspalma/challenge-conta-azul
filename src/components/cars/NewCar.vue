<template>
  <div>
    <header-conta-azul />
    <div class='wrapper'>
      <div class='new-car'>
        <h1 class='title'>Novo Carro</h1>

        <form-car :values='values' messageSubmit='Criar novo carro' />
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import FormCar from 'components/cars/FormCar'

  export default {
    name: 'new-car',
    components: {
      HeaderContaAzul,
      FormCar
    },
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
