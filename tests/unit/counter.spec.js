import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('测试Counter组件', () => {
  it('测试点击加1的功能', () => {
    let wrapper = shallowMount(Counter);
    wrapper.find('button').trigger('click');
    expect(wrapper.find('.count').text()).toBe('1')
  })
})