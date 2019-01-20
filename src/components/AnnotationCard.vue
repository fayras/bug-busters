<template>
  <v-card>
    <v-layout row>
      <v-flex xs5>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="0.6"
        ></v-img>
      </v-flex>
      <v-flex>
        <v-tabs grow>
          <v-tab>Meldung</v-tab>
          <v-tab>Kommentare</v-tab>
          <v-tab-item>
            <v-card-text class="text-xs-left">
              <v-layout column justify-space-between fill-height>
                <div>
                  Located two hours south of Sydney in the <br>
                  Southern Highlands of New South Wales, ...
                </div>
                <v-checkbox label="In der Priorität hochstufen"></v-checkbox>
                <v-flex xs12>#tags #tags #tags</v-flex>
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
      <v-btn flat icon><v-icon>favorite</v-icon></v-btn>
      <v-btn flat icon><v-icon>thumb_up</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn flat color="primary">Blabla</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AnnotationCard',
  props: {
    msg: String,
  },

};
</script>

<style scoped>
.zero-padding {
  padding: 0 !important;
}
</style>
