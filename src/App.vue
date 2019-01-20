<template>
    <v-app dark>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <v-navigation-drawer v-model="drawer" app right :stateless="true">
        <portal-target name="drawer"></portal-target>
      </v-navigation-drawer>
      <v-toolbar dark app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>BugBusters</v-toolbar-title>
        <v-btn flat>
          Home
        </v-btn>
        <v-spacer></v-spacer>
        <v-autocomplete
          style="max-width:200px"
          v-model="floor"
          :items="floorItems"
          class="mx-3"
          flat
          solo
          dense
          hide-no-data
          hide-details
          label="Ebene auswählen..."
        ></v-autocomplete>
        <v-btn flat icon><v-icon>aspect_ratio</v-icon></v-btn>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      floorItems: [
        {
          text: 'NB 02',
          value: 'nb02',
        },
        {
          text: 'NB 01',
          value: 'nb01',
        },
        {
          text: 'NB 1',
          value: 'nb1',
        },
        {
          text: 'IB 02',
          value: 'ib02',
        },
      ],
    };
  },

  computed: {
    drawer: {
      get() { return this.$store.state.ui.showDrawer; },
      set(val) { this.$store.commit('ui/showDrawer', val); },
    },
    floor: {
      get() {
        return this.$store.state.currentFloor;
      },
      set(floor) {
        this.$store.commit('setFloor', floor);
      },
    },
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.leaflet-control-zoom-in, .leaflet-control-zoom-out {
  width: 34px !important;
  height: 34px !important;
  color: white !important;
  border: 2px solid white !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.leaflet-control-zoom-in {
  margin-bottom: 10px;
}
</style>
