const types = {
  WINDOW_UPDATE_SIZE: 'WINDOW_UPDATE_SIZE',
};

export default {
  namespaced: true,
  state: {
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
  },
  actions: {
    windowUpdateSize({ commit }, size) {
      commit(types.WINDOW_UPDATE_SIZE, { size });
    },
  },
};
