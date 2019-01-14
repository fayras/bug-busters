import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { throttle } from 'lodash';
import ui from './ui';

const debug = process.env.NODE_ENV === 'development';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentFloor: 'nb02',
    currentRoom: undefined,
    annotations: [
      {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 14,
        liked: false,
        favorite: false,
        floor: 'nb02',
        room: '1',
      }, {
        id: 2,
        description: 'Kaputt!',
        upvotes: 319,
        liked: true,
        favorite: false,
        floor: 'nb02',
        room: '1',
      }, {
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 4,
        liked: true,
        favorite: true,
        floor: 'nb02',
        room: '1',
      },
    ],
  },
  mutations: {
    like(state, id) {
      const a = state.annotations.find(x => x.id === id);
      if (a) {
        a.liked = !a.liked;
        a.upvotes += a.liked ? 1 : -1;
      }
    },
    fav(state, id) {
      const a = state.annotations.find(x => x.id === id);
      if (a) {
        a.favorite = !a.favorite;
      }
    },
    addAnnotation(state, description) {
      state.annotations.push({
        id: (new Date()).valueOf(),
        description,
        upvotes: 0,
        liked: false,
        favorite: false,
        floor: state.currentFloor,
        room: state.currentRoom,
      });
    },
    setFloor(state, floor) {
      const s = state;
      s.currentFloor = floor;
    },
    setRoom(state, room) {
      const s = state;
      s.currentRoom = room;
    },
  },
  getters: {
    currentAnnotations(state) {
      return state.annotations.filter(
        a => a.floor === state.currentFloor && a.room === state.currentRoom,
      );
    },
    byFloor(state) {
      return floor => state.annotations.filter(a => a.floor === floor);
    },
    byRoom(state) {
      return (floor, room) => state.annotations.filter(a => a.floor === floor && a.room === room);
    },
  },
  actions: {},
  modules: {
    ui,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

const handleResize = throttle(() => {
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  store.dispatch('ui/windowUpdateSize', size);
}, 150);

handleResize();
window.addEventListener('resize', handleResize);

export default store;
