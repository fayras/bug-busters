import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { throttle } from 'lodash';
import ui from './ui';

const debug = process.env.NODE_ENV === 'development';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: {
      name: 'Dimitri',
      type: 'standard',
    },
    currentFloor: 'ib02',
    currentRoom: undefined,
    selectedAnnotationId: undefined,
    annotations: [
      {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 14,
        liked: false,
        favorite: false,
        floor: 'ib02',
        room: 'hib',
        priority: false,
        created_at: new Date(2019, 0, 10, 12, 50),
        created_by: 'Klaus',
        // open, claimed, done
        status: 'open',
        tags: 'test,asd,asd',
        img: '',
        assigned_to: 'Klaus',
        comments: [{
          id: 1,
          user: 'test',
          message: 'Testtesttest',
          date: new Date(2019, 0, 10, 12, 50),
        }],
        object: 'Cube180',
      }, {
        id: 2,
        description: 'Auf dem Stuhl zu sitzen ist wirklich anstrengend. Der wackelt ständig und man fällt eigentlich fast um. Das ist aber mein Lieblingsstuhl, ich hätte den wirklich gerne repariert.',
        upvotes: 319,
        liked: true,
        favorite: false,
        floor: 'ib02',
        room: 'hib',
        priority: true,
        created_at: new Date(),
        created_by: 'Klaus',
        status: 'open',
        tags: 'kaputt,stuhl,fehlendes bein',
        img: '/img/chair.jpg',
        assigned_to: undefined,
        comments: [],
        object: 'Cube180',
      }, {
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 4,
        liked: true,
        favorite: true,
        floor: 'ib02',
        room: 'hib',
        priority: false,
        created_at: new Date(),
        created_by: 'Klaus',
        status: 'open',
        tags: '',
        img: '/img/chair.jpg',
        assigned_to: undefined,
        comments: [],
        object: undefined,
      }, {
        id: 4,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 4,
        liked: true,
        favorite: true,
        floor: 'ib02',
        room: 'hib',
        priority: false,
        created_at: new Date(),
        created_by: 'Klaus',
        status: 'open',
        tags: '',
        img: '/img/chair.jpg',
        coords: [0.07192592322826385, 0.3394669005943769, -0.9322350293923343],
        assigned_to: undefined,
        comments: [],
        object: undefined,
      }, {
        id: 5,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        upvotes: 4,
        liked: true,
        favorite: true,
        floor: 'ib02',
        room: '610',
        priority: false,
        created_at: new Date(),
        created_by: 'Klaus',
        status: 'open',
        tags: '',
        img: '/img/chair.jpg',
        coords: [0.07192592322826385, 0.3394669005943769, -0.9322350293923343],
        assigned_to: undefined,
        comments: [],
        object: undefined,
      },
    ],
  },
  mutations: {
    setUser(s, user) {
      const state = s;
      state.currentUser = user;
    },
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
    addComment(state, annotation) {
      const a = state.annotations.find(x => x.id === annotation.id);
      if (a) {
        a.comments.push({
          id: (new Date()).valueOf(),
          user: state.currentUser.name,
          message: annotation.message,
          date: new Date(),
        });
      }
    },
    addAnnotation(state, a) {
      state.annotations.push({
        id: (new Date()).valueOf(),
        description: a.description,
        upvotes: 0,
        liked: false,
        favorite: false,
        floor: state.currentFloor,
        room: state.currentRoom,
        priority: a.priority,
        created_at: new Date(),
        status: 'open',
        created_by: state.currentUser.name,
        coords: a.coords,
        tags: a.tags,
        comments: [],
        object: a.object,
      });
    },
    deleteAnnotation(state, id) {
      const index = state.annotations.findIndex(x => x.id === id);
      if (index !== -1) {
        state.annotations.splice(index, 1);
      }
    },
    setFloor(state, floor) {
      const s = state;
      s.currentFloor = floor;
    },
    setRoom(state, room) {
      const s = state;
      s.currentRoom = room;
    },
    selectAnnotation(state, id) {
      const s = state;
      s.selectedAnnotationId = id;
    },
    assign(state, id) {
      const a = state.annotations.find(x => x.id === id);
      if (a) {
        a.assigned_to = state.currentUser.name;
        a.status = 'claimed';
      }
    },
  },
  getters: {
    selectedAnnotation(state) {
      return state.annotations.find(a => a.id === state.selectedAnnotationId);
    },
    currentAnnotations(state) {
      return state.annotations.filter(
        a => a.floor === state.currentFloor
        && a.room === state.currentRoom
        && (a.status === 'open' || a.status === 'claimed'),
      );
    },
    claimedAnnotations(state) {
      return state.annotations.filter(
        a => a.floor === state.currentFloor
        && a.room === state.currentRoom
        && a.status === 'claimed',
      );
    },
    doneAnnotations(state) {
      return state.annotations.filter(
        a => a.floor === state.currentFloor
        && a.room === state.currentRoom
        && a.status === 'done',
      );
    },
    byFloor(state) {
      return floor => state.annotations.filter(a => a.floor === floor);
    },
    byRoom(state) {
      return (floor, room) => state.annotations.filter(a => a.floor === floor && a.room === room);
    },
    userIsWorker(state) {
      return state.currentUser.type === 'worker';
    },
    userIsVip(state) {
      return state.currentUser.type === 'vip';
    },
    userIsStandard(state) {
      return state.currentUser.type === 'standard';
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
