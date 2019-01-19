<template>
  <div class="home" style="height: 100%">
    <v-navigation-drawer app v-if="state === 1" right fixed permanent>
      <v-tabs grow>
        <v-tab>Annotationen</v-tab>
        <v-tab>Historie</v-tab>
        <v-tab-item>
          <v-list three-line>
            <v-list-tile v-for="a in annotations" :key="a.id" @click="() => {}">
              <v-list-tile-content>
                <v-list-tile-title>{{ a.description }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ formatDate(a.created_at) }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat icon :color="a.liked ? 'primary': ''" @click="toggleLike(a)">
                  <v-icon>thumb_up</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action style="min-width: 32px;">
                <v-btn flat icon :color="a.favorite ? 'primary': ''" @click="toggleFav(a)">
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-tab-item>
        <v-tab-item>Historie...</v-tab-item>
      </v-tabs>
    </v-navigation-drawer>
    <v-dialog v-model="showDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">
            Neue Annotation
          </span>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>
            <v-textarea autofocus v-model="form.description" label="Beschreibung"></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-checkbox v-model="form.priority" label="In der Priorität hochstufen"></v-checkbox>
          </v-flex>
          <v-flex xs12>
            <v-layout>
              <v-flex xs3>
                <v-btn block><v-icon>attach_file</v-icon>Hochladen</v-btn>
              </v-flex>
              <v-flex>
                <v-text-field label="Datei hochladen..."></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            flat
            @click="newAnnotation"
          >
            Speichern
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn v-if="state === 1" fixed dark fab bottom right @click="showDialog = true">
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
    </l-map>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment';
import { L } from 'vue2-leaflet';
import geoData from '@/assets/geoData';

const STATES = {
  SCROLL: 0,
  ZOOM: 1,
};

export default {
  name: 'home',
  data() {
    return {
      activeItem: 0,
      info: {
        name: '', code: '',
      },
      url: '../assets/logo.png',
      zoom: -1,
      center: [900, 700],
      bounds: null,
      crs: L.CRS.Simple,
      geoData,
      state: STATES.SCROLL,
      showDialog: false,
      form: {
        description: '',
        priority: false,
      },
    };
  },

  mounted() {
    this.$refs.map.mapObject.on('zoomend', this.toggleState);
    this.$refs.map.mapObject.on('movestart', this.resetState);
  },

  computed: {
    annotations() {
      return this.$store.getters.currentAnnotations;
    },
  },

  methods: {
    newAnnotation() {
      this.$store.commit('addAnnotation', {
        description: this.form.description,
        priority: this.form.priority,
      });
      this.form.description = '';
      this.showDialog = false;
    },
    toggleLike(annotation) {
      this.$store.commit('like', annotation.id);
    },
    toggleFav(annotation) {
      this.$store.commit('fav', annotation.id);
    },
    toggleState() {
      if (this.state === STATES.SCROLL) {
        this.state = STATES.ZOOM;
      } else {
        this.resetState();
      }
    },
    resetState() {
      if (this.state === STATES.ZOOM) {
        this.state = STATES.SCROLL;
        this.$store.commit('setRoom', undefined);
      }
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
      if (d > 7) return '#FD8D3C';
      if (d > 6) return '#FEB24C';
      if (d > 5) return '#FED976';
      return '#cce187';
    },
    style(feature) {
      return {
        fillColor: this.getColor(
          this.$store.getters.byRoom(feature.properties.floor, feature.properties.room).length,
        ),
        weight: 0,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7,
      };
    },
    highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        weight: 3,
        color: '#fff',
        dashArray: '6',
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      this.info.name = layer.feature.properties.name;
      this.info.code = layer.feature.properties.code;
    },
    resetHighlight(e) {
      this.$refs.geojson.mapObject.resetStyle(e.target);
      this.info.name = null;
      this.info.code = null;
    },
    zoomToFeature(e) {
      this.$refs.map.fitBounds(e.target.getBounds());
      this.$store.commit('setRoom', e.target.feature.properties.room);
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
      } else {
        this.loadRoom(e);
      }
    },
    loadRoom(e) {
      const { room } = e.target.feature.properties;
      console.log('test', room);
      this.$router.push({
        name: 'room',
        params: {
          id: room,
        },
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

.info {
    width: 100px;
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255,255,255,0.8);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
    text-align: left;
}
.info h4 {
    margin: 0 0 5px;
    color: #777;
}
</style>
