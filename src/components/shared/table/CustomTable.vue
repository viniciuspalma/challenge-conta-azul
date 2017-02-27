<template>
  <div class='table-wrapper'>
    <table>
      <tr>
        <th>
          <div class='checkbox'>
            <input type='checkbox' class='input' :checked='isAllSelected()' />
            <label class='label' v-on:click='onClickCheckBox'>Selecionar todos</label>
            <div class='checkbox-style'></div>
          </div>
        </th>
        <th v-for='field in fields'>
          {{ field.label }}
        </th>
      </tr>

      <row-table v-for='row in rows'
        :fields='fields'
        :row='row'
        :table-name='tableName' />

    </table>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapActions, mapState } from 'vuex'
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
      },
      tableName: {
        type: String,
        required: true
      }
    },
    computed: mapState('table', {
      rowsSelected (state) {
        if (this.rows.length === 0) {
          return [1]
        }
        return state.tables[this.tableName].rowsSelected
      }
    }),
    methods: {
      ...mapActions('table', [
        'createTable',
        'selectRow',
        'deselectRow',
        'selectAllRows',
        'deselectAllRows'
      ]),

      onClickCheckBox () {
        if (this.isAllSelected()) {
          this.deselectAllRows(this.tableName)
        } else {
          this.selectAllRows(this.tableName)
        }
      },

      isAllSelected () {
        return this.rowsSelected.length === this.rows.length
      }
    },
    watch: {
      rows () {
        this.allSelectedButton = false

        this.createTable({
          tableName: this.tableName,
          rowsIdentities: _.map(this.rows, 'id')
        })
      }
    },
    created () {
      this.createTable({
        tableName: this.tableName,
        rowsIdentities: _.map(this.rows, 'id')
      })
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
    padding: 14px 15px;
  }

  th,
  td {
    &:last-child {
      text-align: right;
    }

    &:first-child {
      padding-left: 14px;
    }
  }
</style>
