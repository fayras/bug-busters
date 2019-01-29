<template>
  <v-card>
    <v-layout row>
      <v-flex xs5 style="min-width: 43%;">
        <v-layout column justify-space-around fill-height style="padding:4px">
          <div class="upload fill-height d-flex text-xs-center">
            <div>
              <v-btn icon><v-icon x-large>cloud_upload</v-icon></v-btn><br>
              <span class="font-weight-regular title">Foto hochladen</span>
            </div>
          </div>
        </v-layout>
      </v-flex>
      <v-flex>
            <v-card-text class="text-xs-left fill-height">
              <v-layout column justify-space-between fill-height >
                <v-flex d-flex xs12 style="flex-basis:auto">
                  <v-textarea v-model="desc" box autofocus label="Beschreibung">

                  </v-textarea>
                </v-flex>
                <v-flex xs12 style="flex-basis:auto"></v-flex>
                <v-flex d-flex xs12 style="flex-basis:auto">
                  <v-layout column>
                    <v-flex xs12>
                      <v-text-field
                        v-model="tags"
                        box
                        label="Tags"
                        hint="Es können mehrere Tags kommasepariert eingetragen werden"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 v-if="$store.getters.userIsVip">
                      <v-checkbox
                        v-model="priority"
                        label="In der Priorität hochstufen"
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="emit" flat color="primary">Speichern</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewAnnotationCard',
  data() {
    return {
      desc: '',
      tags: '',
      priority: false,
    };
  },

  methods: {
    emit() {
      this.$emit('save', {
        description: this.desc,
        tags: this.tags,
        priority: this.priority,
      });

      this.desc = '';
      this.tags = '';
      this.priority = false;
    },
  },
};
</script>

<style scoped>
.zero-padding {
  padding: 0 !important;
}

.upload {
  border: 3px dashed #ccc;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  cursor: pointer;
}

.tab-item-wrapper {
  /* vuetify sets the v-tabs__container height to 48px */
  height: calc(50vh - 96px)
}
</style>
