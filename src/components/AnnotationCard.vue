<template>
<v-dialog v-model="showDialog" max-width="600px">
  <v-card>
    <v-layout row>
      <v-flex xs5 style="min-width: 43%;">
        <v-img
          :src="annotation.img"
          aspect-ratio="0.6"
        ></v-img>
      </v-flex>
      <v-flex>
        <v-tabs grow>
          <v-tab>Meldung</v-tab>
          <v-tab>Kommentare</v-tab>
          <v-tab-item class="tab-item-wrapper">
            <v-card-text class="text-xs-left fill-height">
              <v-layout column justify-space-between fill-height >
                <v-flex d-flex xs12 style="flex-basis:auto">
                  <div style="overflow-y: auto">{{ annotation.description }}</div>
                </v-flex>
                <v-flex xs12 style="flex-basis:auto"></v-flex>
                <v-flex d-flex xs12 style="flex-basis:auto">
                  <v-layout column>
                    <v-flex xs12>
                      <v-checkbox label="In der Priorität hochstufen"></v-checkbox>
                    </v-flex>
                    <v-flex xs12>
                      <span class="body-1 grey--text text--lighten-1">
                        Eingestellt{{
                          $store.getters.userIsWorker ? ` von ${annotation.created_by}` : ''
                        }} {{ formatedDate }}
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="body-1 grey--text text--lighten-1">{{ annotation.tags }}</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text class="text-xs-left">
              <v-card flat @click="() => {}">
                <v-card-title primary-title class="zero-padding" style="margin-bottom: 5px">
                  <v-layout row wrap align-center>
                    <v-avatar size="36" color="indigo">
                      <v-icon dark>account_circle</v-icon>
                    </v-avatar>
                    <div style="margin-left: 15px">
                      <h3 style="margin-bottom: -5px">Test</h3>
                      <span class="caption grey--text text--darken-1">vor 19 Stunden</span>
                    </div>
                  </v-layout>
                </v-card-title>
                <v-card-text class="zero-padding">
                  asdhasl dashdialusduhasid lasdas ldasgd asld asd
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat :color="annotation.liked ? 'primary': ''" @click.stop="toggleLike">
        {{ annotation.upvotes }}
        <v-icon right>thumb_up</v-icon>
      </v-btn>
      <v-btn flat icon :color="annotation.favorite ? 'primary': ''" @click.stop="toggleFav">
        <v-icon>{{ annotation.favorite ? 'notifications_active': 'notifications' }}</v-icon>
      </v-btn>
      <v-btn flat icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Bearbeiten</v-btn>
      <v-btn flat @click="deleteAnnotation">Löschen</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import moment from 'moment';

export default {
  name: 'AnnotationCard',
  data() {
    return {

    };
  },

  computed: {
    showDialog: {
      get() { return !!this.$store.getters.selectedAnnotation; },
      set(flag) {
        if (!flag) {
          this.$store.commit('selectAnnotation');
        }
      },
    },

    annotation() {
      return this.$store.getters.selectedAnnotation || {};
    },

    formatedDate() {
      return moment(this.annotation.created_at).locale('de').fromNow();
    },
  },

  methods: {
    deleteAnnotation() {
      this.$store.commit('deleteAnnotation', this.annotation.id);
    },
    toggleLike() {
      this.$store.commit('like', this.annotation.id);
    },
    toggleFav() {
      this.$store.commit('fav', this.annotation.id);
    },
  },
};
</script>

<style scoped>
.zero-padding {
  padding: 0 !important;
}

.tab-item-wrapper {
  /* vuetify sets the v-tabs__container height to 48px */
  height: calc(50vh - 96px)
}
</style>
