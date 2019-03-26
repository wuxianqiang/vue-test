export default {
  state: {
    count: 0
  },
  mutations: {
    set_count (state, value) {
      state.count = value
    }
  },
  actions: {
    setCount ({commit}) {
      setTimeout(() => {
        commit('set_count', 10)
      }, 1000);
    }
  }
}
