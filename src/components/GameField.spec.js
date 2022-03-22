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

  it('displays cross component for 1 in field', () => {
    const field = createEmptyField();
    field[1][2] = 1;
    const wrapper = shallowMount(GameField, {
      propsData: { field },
    });

    expect(wrapper.findAll('tr').at(1).findAll('td').at(2)
      .find('cross-icon-stub')
      .exists()).toBe(true);
  });

  it('displays circle component for 2 in field', () => {
    const field = createEmptyField();
    field[1][2] = 2;
    const wrapper = shallowMount(GameField, {
      propsData: { field },
    });

    expect(wrapper.findAll('tr').at(1).findAll('td').at(2)
      .find('circle-icon-stub')
      .exists()).toBe(true);
  });
});
