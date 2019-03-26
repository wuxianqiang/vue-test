import Vuex from 'Vuex';
import config from '@/store';
import {createLocalVue} from '@vue/test-utils'

let localVue = createLocalVue();
localVue.use(Vuex);

describe('测试vuex功能', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store(config)
  })
  it('state是否能显示到页面中', () => {
    expect(store.state.count).toBe(0)
    jest.useFakeTimers()
    store.dispatch('setCount')
    jest.runAllTimers()
    expect(store.state.count).toBe(10)
    jest.useRealTimers()
  })
})