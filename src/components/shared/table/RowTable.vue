<template>
  <tr>
    <td>
      <div class='checkbox'>
        <input type='checkbox' class='input' :checked='isChecked(row.id)'/>
        <label class='label' v-on:click='onClickCheckBox(row.id)'>
          {{ row.id }}
        </label>
        <div class='checkbox-style'></div>
      </div>
    </td>
    <td v-for='field in fields'>
      <template v-if='field.options && field.options.link'>
        <a :href='row[field.property]' v-if='row[field.property]'>{{ field.label }}</a>
        <p v-else>Sem {{ field.label }}</p>
      </template>
      <template v-else-if='field.options && field.options.resourceLink'>
        <router-link :to="{ name: 'ShowCar', params: { id: row[field.property] }}">
          {{ field.label }}
        </router-link>
      </template>
      <template v-else-if='field.options && field.options.money'>
        <p>{{ row[field.property] | formatMoney }}</p>
      </template>
      <template v-else>
        <p>{{ row[field.property] }}</p>
      </template>
    </td>
  </tr>
</template>

<script>
  import _ from 'lodash'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'row-table',
    props: {
      fields: {
        type: Array,
        required: true
      },
      row: {
        type: Object,
        required: true
      },
      tableName: {
        type: String,
        required: true
      }
    },
    computed: mapState('table', {
      rowsSelected (state) {
        return state.tables[this.tableName].rowsSelected
      }
    }),
    methods: {
      ...mapActions('table', [
        'selectRow',
        'deselectRow'
      ]),

      isChecked (identity) {
        return _.includes(this.rowsSelected, identity)
      },
      onClickCheckBox (identity) {
        if (this.isChecked(identity)) {
          this.deselectRow({
            tableName: this.tableName,
            rowIdentity: identity
          })
        } else {
          this.selectRow({
            tableName: this.tableName,
            rowIdentity: identity
          })
        }
      }
    }
  }
</script>
