<template>
  <div class='table-wrapper'>
    <table>
      <tr>
        <th v-for='field in fields'>
          {{ field.label }}
        </th>
      </tr>

      <row-table v-for='row in rows' :fields='fields' :row='row' />
    </table>
  </div>
</template>

<script>
  import RowTable from 'components/shared/table/RowTable'

  export default {
    name: 'custom-table',
    components: {
      RowTable
    },
    data () {
      return {
        rows: [
          {combustivel: 'Flex', imagem: null, marca: 'Volkswagem', modelo: 'Gol', placa: 'FFF-5498', valor: '20000'},
          {combustivel: 'Gasolina', imagem: null, marca: 'Volkswagem', modelo: 'Fox', placa: 'FOX-4125', valor: '20000'},
          {combustivel: 'Alcool', imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg', marca: 'Volkswagen', modelo: 'Fusca', placa: 'PAI-4121', valor: '20000'}
        ],
        fields: [
          {property: 'placa', label: 'Placa'},
          {property: 'modelo', label: 'Model'},
          {property: 'marca', label: 'Marca'},
          {property: 'imagem', label: 'Foto', options: {link: true}},
          {property: 'combustivel', label: 'Combustível'},
          {property: 'valor', label: 'Valor', options: {money: true}}
        ]
      }
    }
  }
</script>

<style lang='scss'>
  @import '~styles/_variables.scss';

  .table-wrapper {
    padding: 0 $side-default-padding;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    border-bottom: none;

    p {
      margin: 0;
    }
  }

  tr {
    background: $white;
    border-bottom: solid 1px;
    border-left: solid 1px;
    border-right: solid 1px;
    border-color: $border-color;

    &:first-child {
      border-top: solid 1px $border-color;
      border-radius: $border-radius-default;
    }

    &:hover {
      background: $background-hover;
    }

    &.selected {
      background: $background-active;
      border: solid 1px $border-color-active;
    }
  }

  th {
    font-size: 12px;
    font-weight: 500;
    padding: 11px 15px;
    background: $background-lighten;
  }

  td {
    font-size: 14px;
    padding: 16px 15px;
  }

  th,
  td {
    &:last-child {
      text-align: right;
      padding-right: 50px;
    }
  }
</style>
