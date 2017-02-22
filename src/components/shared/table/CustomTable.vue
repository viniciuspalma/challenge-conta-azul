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
    props: {
      rows: {
        type: Array,
        required: true
      },
      fields: {
        type: Array,
        required: true
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
