<template>
  <form v-on:submit.prevent='onSubmit'>
    <div class='row'>
      <div class='input-box medium'>
        <label class='label'>Modelo:</label>
        <input class='input'
          type='text'
          name='modelo'
          placeholder='Insira o modelo do carro'
          v-model='modelo'>
      </div>

      <div class='input-box medium'>
        <label class='label'>Marca:</label>
        <input class='input'
          type='text'
          name='marca'
          placeholder='Insira a marca do carro'
          v-model='marca'>
      </div>
    </div>

    <div class='row'>
      <div class='input-box medium'>
        <label class='label'>Placa:</label>
        <input class='input'
          type='text'
          name='placa'
          placeholder='Insira a placa do carro'
          v-model='placa'>
      </div>

      <div class='input-box medium'>
        <label class='label'>Valor:</label>
        <input class='input'
          type='text'
          name='valor'
          placeholder='Insira o valor do carro'
          v-model='valor'>
      </div>
    </div>

    <div class='row'>
      <div class='input-box'>
        <label class='label'>Combustível:</label>
        <input class='input'
          type='text'
          name='combustivel'
          placeholder='Insira o combustível usado pelo carro'
          v-model='combustivel'>
      </div>
    </div>

    <div class='row'>
      <div class='input-box'>
        <label class='label'>Imagem:</label>
        <input class='input'
          type='text'
          name='imagem'
          placeholder='Insira a imagem do carro'
          v-model='imagem'>
      </div>
    </div>

    <div class='row'>
      <button name='button'>{{ messageSubmit }}</button>
      <button name='button' class='back' type='button' v-on:click='clickBack'>Voltar</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'form-car',
    props: {
      messageSubmit: {
        type: String,
        required: true
      },
      values: {
        type: Object,
        required: true
      },
      submitCallback: {
        type: Function
      }
    },
    methods: {
      onSubmit () {
        const router = this.$router
        const id = this.$route.params.id

        this.submitCallback({
          router: router,
          id: id,
          car: {
            modelo: this.modelo,
            marca: this.marca,
            placa: this.placa,
            valor: this.valor,
            combustivel: this.combustivel,
            imagem: this.imagem
          }
        })
      },
      clickBack () {
        this.$router.go(-1)
      }
    },
    data () {
      return {
        modelo: this.values.modelo,
        marca: this.values.marca,
        placa: this.values.placa,
        valor: this.values.valor,
        combustivel: this.values.combustivel,
        imagem: this.values.imagem
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/_variables.scss';

  .row {
    font-size: 0;
    margin-bottom: 15px;
  }

  .input-box {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    padding-right: 15px;

    &.medium {
      width: 50%;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  .input {
    display: inline-block;
    width: 100%;
    height: 40px;
    background: $white;
    outline: 0;
    font-size: 14px;
    padding: 0 15px;
    color: $text;
    font-weight: 100;
    border: solid 1px $border-color;
    border-radius: $border-radius-default;
  }

  .label {
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
  }

  button {
    color: $white;
    font-size: 18px;
    padding: 12px 35px;
    background: $success;
    cursor: pointer;
    border-radius: $border-radius-default;
    margin-right: 15px;

    &.back {
      background: $alert;
    }
  }
</style>
