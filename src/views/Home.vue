<template>
  <div class="home" style="height: 100%">
    <portal to="drawer">
      <v-tabs grow>
        <v-tab>Annotationen</v-tab>
        <v-tab>Historie</v-tab>
        <v-tab-item>
          <v-list three-line>
            <v-list-tile
              v-for="a in annotations"
              :key="a.id"
              @click="() => selectAnnotation(a.id)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ a.description }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ formatDate(a.created_at) }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat icon :color="a.liked ? 'primary': ''" @click.stop="toggleLike(a)">
                  <v-icon>thumb_up</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action style="min-width: 32px;">
                <v-btn flat icon :color="a.favorite ? 'primary': ''" @click.stop="toggleFav(a)">
                  <v-icon>{{ a.favorite ? 'notifications_active': 'notifications' }}</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-tab-item>
        <v-tab-item>Historie...</v-tab-item>
      </v-tabs>
    </portal>
    <annotation-card></annotation-card>
    <v-dialog v-model="showDialogNew" max-width="600px">
      <new-annotation-card @save="newAnnotation"></new-annotation-card>
    </v-dialog>
    <v-btn v-if="state === 1" fixed dark fab bottom right @click="showDialogNew = true">
      <v-icon>add</v-icon>
    </v-btn>
    <l-map
      ref="map"
      :crs="crs"
      :zoom="zoom"
      :center="center"
      :minZoom="-2"
      :options="{zoomControl: false, attributionControl: false}"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
      style="z-index:0"
    >
      <l-control-zoom ref="zoomControl" position="bottomleft"  ></l-control-zoom>
      <l-img-overlay url="./img/IB.png" :bounds="[[0,0], [4034,3026]]"></l-img-overlay>
      <l-geo-json
        ref="geojson"
        :geojson="geoData"
        :optionsStyle="style"
        :options="{ onEachFeature: onEachFeature }"
      ></l-geo-json>
      <l-marker
        v-for="d in geoData.features"
        :key="d.properties.id"
        :lat-lng="d.properties.badge"
      >
        <l-icon class-name="someExtraClass">
          <v-badge left :color="getColor(getCountForBadge(d.properties.floor, d.properties.room))">
            <span slot="badge" :style="{
              color: getCountForBadge(d.properties.floor, d.properties.room) > 6 ? 'white' : 'black'
            }">
              {{ getCountForBadge(d.properties.floor, d.properties.room) }}
            </span>
          </v-badge>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment';
import { L } from 'vue2-leaflet';
import geoData from '@/assets/geoData';
import AnnotationCard from '@/components/AnnotationCard.vue';
import NewAnnotationCard from '@/components/NewAnnotationCard.vue';

const STATES = {
  SCROLL: 0,
  ZOOM: 1,
};

export default {
  name: 'home',
  components: { AnnotationCard, NewAnnotationCard },
  data() {
    return {
      activeItem: 0,
      url: '../assets/logo.png',
      zoom: -1,
      center: [1200, 1513],
      bounds: null,
      crs: L.CRS.Simple,
      geoData,
      state: STATES.SCROLL,
      showDialogNew: false,
      zooming: false,
    };
  },

  mounted() {
    this.$refs.map.mapObject.on('movestart', this.handleState);
  },

  computed: {
    annotations() {
      return this.$store.getters.currentAnnotations;
    },
  },

  methods: {
    selectAnnotation(id) {
      this.$store.commit('selectAnnotation', id);
    },
    newAnnotation(a) {
      this.$store.commit('addAnnotation', {
        description: a.description,
        priority: a.priority,
        tags: a.tags,
      });
      this.showDialogNew = false;
    },
    toggleLike(annotation) {
      this.$store.commit('like', annotation.id);
    },
    toggleFav(annotation) {
      this.$store.commit('fav', annotation.id);
    },
    handleState() {
      if (!this.zooming) {
        this.resetState();
      }
      this.zooming = false;
    },
    resetState() {
      this.state = STATES.SCROLL;
      this.$store.commit('ui/showDrawer', false);
      this.$store.commit('setRoom', undefined);
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    getColor(d) {
      if (d > 1000) return '#800026';
      if (d > 500) return '#BD0026';
      if (d > 9) return '#E31A1C';
      if (d > 8) return '#FC4E2A';
      if (d > 6) return '#FD8D3C';
      if (d > 3) return '#FEB24C';
      if (d > 1) return '#FED976';
      return '#cce187';
    },
    getCountForBadge(floor, room) {
      return this.$store.getters.byRoom(floor, room).length;
    },
    style(feature) {
      let color;
      let fillOpacity;

      if (
        feature.properties.floor === this.$store.state.currentFloor
        && feature.properties.room === this.$store.state.currentRoom
      ) {
        color = '#B8E6FF';
        fillOpacity = 0.5;
      } else {
        // color = this.getColor(
        //   this.$store.getters.byRoom(feature.properties.floor, feature.properties.room).length,
        // );
        color = '#83AF9B';
        fillOpacity = 0.1;
      }

      return {
        fillColor: color,
        weight: 0,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity,
      };
    },
    highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        weight: 2,
        color: '#fff',
        dashArray: '6',
        fillOpacity: 0.4,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    resetHighlight(e) {
      this.$refs.geojson.mapObject.resetStyle(e.target);
    },
    zoomToFeature(e) {
      this.state = STATES.ZOOM;
      this.zooming = true;
      this.$store.commit('ui/showDrawer', true);
      this.$store.commit('setRoom', e.target.feature.properties.room);
      setTimeout(() => {
        const bounds = e.target.getBounds();
        this.$refs.map.mapObject.fitBounds(bounds);
      }, 310);
    },
    onEachFeature(feature, layer) {
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.handleClick, // this.loadRoom,
      });
    },
    handleClick(e) {
      if (this.state === STATES.SCROLL) {
        this.zoomToFeature(e);
      } else if (this.state === STATES.ZOOM) {
        this.loadRoom(e);
      } else {
        this.resetState();
      }
    },
    loadRoom(e) {
      const { room } = e.target.feature.properties;
      this.$store.commit('ui/showDrawer', false);
      this.$nextTick(() => {
        this.$router.push({
          name: 'room',
          params: {
            id: room,
          },
        });
      });
    },
    formatDate(d) {
      return moment(d).locale('de').format('L LT');
    },
  },
};
</script>

<style scoped>
.leaflet-container {
  background-color: #2f3b39;
}
</style>
