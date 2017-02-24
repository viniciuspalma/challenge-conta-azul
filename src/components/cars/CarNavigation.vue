<template>
  <div class='navigation'>
    <div class='button-box'>
      <router-link :to="{ name: 'NewCar' }">
        <new-car-button/>
      </router-link>

      <button class='action edit'
        v-if='showEdit()'
        v-on:click='clickEdit'>
        Editar
      </button>

      <button class='action delete'
        v-if='showDelete()'
        v-on:click='clickDelete'>
        Deletar
      </button>
    </div>

    <div class='search-box'>
      <search-car :hints="{
        combustivel: combustivel,
        marca: marca
      }" />
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapState, mapActions } from 'vuex'
  import NewCarButton from 'components/cars/NewCarButton'
  import SearchCar from 'components/cars/SearchCar'

  export default {
    name: 'car-navigation',
    components: {
      NewCarButton,
      SearchCar
    },
    computed: {
      ...mapState('cars', {
        combustivel: state => _.uniq(_.map(state.all, 'combustivel')),
        marca: state => _.uniq(_.map(state.all, 'marca'))
      }),

      ...mapState('table', {
        rowsSelected: state => {
          if (state.tables.cars === undefined) {
            return []
          }
          return state.tables.cars.rowsSelected
        }
      })
    },
    methods: {
      ...mapActions('cars', [
        'deleteCar',
        'massDeleteCars'
      ]),

      showEdit () {
        return this.rowsSelected.length === 1
      },
      showDelete () {
        return this.rowsSelected.length > 0
      },
      clickEdit () {
        this.$router.push({ name: 'ShowCar', params: { id: this.rowsSelected[0] } })
      },
      clickDelete () {
        if (this.rowsSelected.length > 1) {
          this.massDeleteCars(this.rowsSelected)
        } else {
          this.deleteCar(this.rowsSelected[0])
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  @import '~styles/_variables.scss';

  .navigation {
    margin: 20px 0;
    padding: 0 $side-default-padding;
    font-size: 0;

    .button-box,
    .search-box {
      display: inline-block;
      vertical-align: middle;
      width: 50%;
    }

    .button-box {
      text-align: left;
    }

    .search-box {
      text-align: right;
    }

    a,
    .action {
      display: inline-block;
      vertical-align: middle;
      margin-right: 15px;
    }

    .action {
      position: relative;
      height: 40px;
      width: 40px;
      text-indent: -9999px;
      border-radius: $border-radius-default;

      &.edit::before,
      &.delete::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: 48px;
        height: 48px;
        transform: scale(.4);
      }

      &.edit {
        background: $info;

        &::before {
          filter: invert(1);
          background: url('~assets/icons/edit.png');
        }
      }

      &.delete {
        background: $alert;

        &::before {
          filter: invert(1);
          background: url('~assets/icons/delete.png');
        }
      }
    }
  }
</style>
