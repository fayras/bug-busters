const types = {
  WINDOW_UPDATE_SIZE: 'WINDOW_UPDATE_SIZE',
};

export default {
  namespaced: true,
  state: {
    showDrawer: false,
    window: {
      width: 1,
      height: 1,
    },
  },
  mutations: {
    [types.WINDOW_UPDATE_SIZE](s, { size }) {
      const state = s;
      state.window.width = size.width || state.window.width;
      state.window.height = size.height || state.window.height;
    },
    showDrawer(s, value) {
      const state = s;
      state.showDrawer = value;
    },
  },
  actions: {
    windowUpdateSize({ commit }, size) {
      commit(types.WINDOW_UPDATE_SIZE, { size });
    },
  },
};
