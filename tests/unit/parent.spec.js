import {shallowMount} from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue';
import ParentComponent from '@/components/ParentComponent.vue';

describe('测试父子组件数据传递', () => {
  it ('测试两个组件', () => {
    let wrapper = shallowMount(ParentComponent)
    wrapper.find(ChildComponent).vm.$emit('selectItem', '6');
    expect(wrapper.find('.count').text()).toBe('6')
  })
})