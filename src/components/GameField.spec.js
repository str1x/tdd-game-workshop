import { shallowMount } from '@vue/test-utils';
import GameField from '@/components/GameField.vue';

const createEmptyField = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

describe('GameField component', () => {
  it('validates field prop like 2d matrix', () => {
    const { validator } = GameField.props.field;

    expect(validator(createEmptyField())).toBe(true);
    expect(validator([1, 2, 3])).toBe(false);
    expect(validator([createEmptyField()])).toBe(false);
  });

  it('displays table with size of passed matrix in field prop', () => {
    const wrapper = shallowMount(GameField, {
      propsData: { field: createEmptyField() },
    });
    expect(wrapper.findAll('table tr')).toHaveLength(3);
    expect(wrapper.find('table tr').findAll('td')).toHaveLength(3);
  });

  it('emits event @update with row index, col index and cross value (1) when click on empty cell', () => {
    const wrapper = shallowMount(GameField, {
      propsData: { field: createEmptyField() },
    });

    wrapper.findAll('tr').at(1).findAll('td').at(2)
      .trigger('click');

    expect(wrapper.emitted('update')[0]).toEqual([1, 2, 1]);
  });
});
