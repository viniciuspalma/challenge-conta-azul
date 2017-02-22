<template>
  <div>
    <header-conta-azul />

    <div class='wrapper'>
      <car-navigation />
      <custom-table :rows='carsRows' :fields='fields' />
      <paginator />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import HeaderContaAzul from 'components/shared/HeaderContaAzul'
  import CarNavigation from 'components/cars/CarNavigation'
  import CustomTable from 'components/shared/table/CustomTable'
  import Paginator from 'components/shared/Paginator'

  export default {
    name: 'home',
    components: {
      HeaderContaAzul,
      CarNavigation,
      CustomTable,
      Paginator
    },
    data () {
      return {
        fields: [
          {property: 'placa', label: 'Placa'},
          {property: 'modelo', label: 'Model'},
          {property: 'marca', label: 'Marca'},
          {property: 'imagem', label: 'Foto', options: {link: true}},
          {property: 'combustivel', label: 'Combustível'},
          {property: 'valor', label: 'Valor', options: {money: true}}
        ]
      }
    },
    computed: mapState({
      carsRows: state => state.cars.all
    }),
    methods: mapActions([
      'getCars'
    ]),
    created () {
      this.getCars()
    }
  }
</script>
