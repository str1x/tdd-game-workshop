import { shallowMount } from '@vue/test-utils';
import GamePage from '@/GamePage.vue';

describe('GamePage', () => {
  it('mounts', () => {
    const wrapper = shallowMount(GamePage);

    expect(wrapper.exists()).toBe(true);
  });
});
