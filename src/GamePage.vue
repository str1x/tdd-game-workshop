<template>
  <div class="game">
    <game-field
      :field="field"
      class="game__field"
      @update="onUpdateField"
    />
  </div>
</template>

<script>
import GameField from '@/components/GameField.vue';

export default {
  name: 'GamePage',
  components: {
    GameField,
  },
  data() {
    return {
      field: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
  },
  methods: {
    onUpdateField(rowIndex, colIndex, value) {
      const row = this.field[rowIndex];
      row[colIndex] = value;
      this.$set(this.field, rowIndex, row);
    },
  },
};
</script>

<style scoped>
.game {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.game__field {
  margin: 0 auto;
}
</style>
