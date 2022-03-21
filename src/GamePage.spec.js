import { shallowMount } from '@vue/test-utils';
import GamePage from '@/GamePage.vue';

const createEmptyField = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

describe('GamePage', () => {
  it('mounts', () => {
    const wrapper = shallowMount(GamePage);

    expect(wrapper.exists()).toBe(true);
  });

  describe('game field', () => {
    it('displays GameField component', () => {
      const wrapper = shallowMount(GamePage);

      expect(wrapper.findComponent({ name: 'GameField' }).exists()).toBe(true);
    });

    it('passes 2d matrix 3x3 in field prop', () => {
      const wrapper = shallowMount(GamePage);

      const field = wrapper.findComponent({ name: 'GameField' }).props('field');
      expect(field).toHaveLength(3);
      expect(field[0]).toHaveLength(3);
      expect(field[0].every((value) => Number.isInteger(value)));
    });

    it('changes field data on @update GameField event', async () => {
      const wrapper = shallowMount(GamePage);
      await wrapper.setData({ field: createEmptyField() });

      wrapper.findComponent({ name: 'GameField' }).vm.$emit('update', 1, 2, 1);

      const field = wrapper.findComponent({ name: 'GameField' }).props('field');
      expect(field[1][2]).toBe(1);
    });
  });
});
