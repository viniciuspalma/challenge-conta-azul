<template>
  <div>
    <header-conta-azul />

    <div class='wrapper'>
      <car-navigation />
      <custom-table
        :rows='carsRowsPerPage'
        :fields='fields' />
      <paginator
        :numberOfItems='carsRows.length'
        pathName='Home'
        :itemsPerPage='itemsPerPage' />
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapState } from 'vuex'
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
        itemsPerPage: 5,
        fields: [
          {property: 'placa', label: 'Placa'},
          {property: 'modelo', label: 'Model'},
          {property: 'marca', label: 'Marca'},
          {property: 'imagem', label: 'Foto', options: {link: true}},
          {property: 'combustivel', label: 'Combustível'},
          {property: 'valor', label: 'Valor', options: {money: true}},
          {property: 'id', label: 'Visualizar', options: {resourceLink: true}}
        ]
      }
    },
    computed: mapState({
      carsRows: state => state.cars.all,
      carsRowsPerPage (state) {
        const chunkedCars = _.chunk(state.cars.all, this.itemsPerPage)

        if (this.$route.query.page === undefined) {
          return chunkedCars[0]
        }

        return chunkedCars[this.$route.query.page - 1]
      }
    })
  }
</script>
