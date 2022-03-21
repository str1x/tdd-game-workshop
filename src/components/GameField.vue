<template>
  <table class="game-field">
    <tr
      v-for="(row, rowIndex) in field"
      :key="`row-${rowIndex}`"
      class="game-field__row"
    >
      <td
        v-for="(cell, colIndex) in row"
        :key="`col-${rowIndex}-${colIndex}`"
        class="game-field__cell"
        @click="$emit('update', rowIndex, colIndex, 1)"
      ></td>
    </tr>
  </table>
</template>

<script>
const fieldValidator = (field) => Array.isArray(field)
  && Array.isArray(field[0])
  && field[0].every((value) => Number.isInteger(value));

export default {
  name: 'GameField',
  props: {
    field: {
      type: Array,
      required: true,
      validator: fieldValidator,
    },
  },
};
</script>

<style scoped>
.game-field {
  background-color: #4B3B47;
}
.game-field__cell {
  width: 100px;
  height: 100px;
  background-color: #6A6262;
  border: 1px solid #4B3B47;
}
</style>
