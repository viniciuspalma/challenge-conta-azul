<template>
  <div>
    <template v-if='hasErrors' >
      <ul class='form-errors'>
        <li class='error' v-for='error in errors'>
          {{ error }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'form-errors',
    props: {
      errors: {
        type: Array,
        required: true
      }
    },
    computed: {
      hasErrors () {
        return this.errors.length > 0
      }
    }
  }
</script>
