<template>
  <tr>
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
      }
    }
  }
</script>
