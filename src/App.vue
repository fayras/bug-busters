<template>
  <div id="app">
    <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <v-toolbar dark fixed app class="nav">
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
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
    </v-app>
  </div>
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
          text: 'NA 1',
          value: 'na1',
        },
      ],
    };
  },

  computed: {
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
  height: 100%;
}
#nav {
  padding: 30px;
  position: absolute;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
