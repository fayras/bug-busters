import Vue from 'vue';
import Vuetify from 'vuetify';
import PortalVue from 'portal-vue';
import 'vuetify/dist/vuetify.min.css'; // Vuesax styles

import {
  L, LMap, LTileLayer, LMarker, LImageOverlay, LGeoJson, LControl, LControlZoom, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-img-overlay', LImageOverlay);
Vue.component('l-marker', LMarker);
Vue.component('l-geo-json', LGeoJson);
Vue.component('l-control', LControl);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-icon', LIcon);

Vue.use(Vuetify);
Vue.use(PortalVue);

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
