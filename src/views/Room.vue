<template>
  <div id="container" class="about">
    <annotation-card></annotation-card>
    <v-dialog v-model="showDialog" max-width="600px">
      <new-annotation-card-with-tips
        @save="createAnnotation"
        :object="object"
      ></new-annotation-card-with-tips>
    </v-dialog>
    <div ref="container" class="canvas-container">
      <div
        v-for="a in annotationsWithCoords"
        :key="a.id"
        :class="{ annotation: true, transparent: coords[a.id] && coords[a.id].opacity < 1}"
        :style="!coords[a.id] ? {} : {
          top: coords[a.id].top,
          left: coords[a.id].left,
          opacity: coords[a.id].opacity
        }"
        @click="() => selectAnnotation(a.id)"
      >
        <p>{{ a.description }}</p>
      </div>
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Room3D from '@/components/Room3D';
import NewAnnotationCardWithTips from '@/components/NewAnnotationCardWithTips.vue';
import AnnotationCard from '@/components/AnnotationCard.vue';
// https://threejs.org/docs/#manual/en/introduction/Loading-3D-models

export default {
  name: 'Room',
  components: { NewAnnotationCardWithTips, AnnotationCard },
  props: {
    id: String,
  },
  data() {
    return {
      coords: {},
      showDialog: false,
      object: undefined,
    };
  },
  computed: {
    annotations() {
      return this.$store.getters.currentAnnotations;
    },
    annotationsWithCoords() {
      return this.annotations.filter(a => a.coords).map((a) => {
        const x = a.coords[0];
        const y = a.coords[1];
        const z = a.coords[2];
        // eslint-disable-next-line
        return { ...a, coords: new THREE.Vector3(x, y, z) };
      });
    },
    windowWidth() {
      return this.$store.state.ui.window.width;
    },

    windowHeight() {
      return this.$store.state.ui.window.height;
    },
  },
  watch: {
    windowWidth() {
      this.room.handleResize();
    },
    windowHeight() {
      this.room.handleResize();
    },
  },
  mounted() {
    this.onCameraChange = () => {
      const canvas = this.room.renderer.domElement;
      for (let i = 0; i < this.annotationsWithCoords.length; i += 1) {
        const vector = this.annotationsWithCoords[i].coords.clone();
        const length = this.room.camera.position.distanceTo(vector);

        // const meshDistance = camera.position.distanceTo(mesh.position);
        // const spriteDistance = camera.position.distanceTo(vector);
        // spriteBehindObject = spriteDistance > meshDistance;

        vector.project(this.room.camera);

        vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
        vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

        const length2 = this.room.camera.position.distanceTo(
          this.room.get3dPoint(vector.x, vector.y),
        );

        Vue.set(this.coords, this.annotationsWithCoords[i].id, {
          top: `${vector.y}px`,
          left: `${vector.x}px`,
          opacity: length - length2 > 0.2 ? 0.5 : 1,
        });
      }
    };
    this.currentIntersect = null;
    this.room = new Room3D(this.$refs.canvas, this.$refs.container);
    this.room.onClick(intersect => this.addAnnotation(intersect));
    this.room.onCameraChange(() => this.onCameraChange());
    this.$nextTick(async () => {
      this.room.handleResize();
      await this.room.loadRoom();
      this.onCameraChange();
    });
  },
  beforeDestroy() {
    this.room.destroy();
  },
  methods: {
    selectAnnotation(id) {
      this.$store.commit('selectAnnotation', id);
    },
    addAnnotation(intersect) {
      this.currentIntersect = intersect;
      this.object = this.currentIntersect.name;
      this.showDialog = true;
    },
    createAnnotation(annotation) {
      const p = this.currentIntersect.point;
      this.$store.commit('addAnnotation', {
        description: annotation.description,
        priority: annotation.priority,
        tags: annotation.tags,
        coords: [p.x, p.y, p.z],
        object: annotation.object,
      });
      this.showDialog = false;
      this.currentIntersect = null;
      this.onCameraChange();
    },
  },
};
</script>
<style scoped>
#container {
  height: 100%;
  display: flex;
  flex-flow: column;
}

.canvas-container {
  width: 100%;
  flex-grow : 1;
  overflow: hidden;
}

.canvas-container > canvas {
  margin: auto;
  width: 100%;
  height: 100%;
}

.annotation {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin-left: 15px;
    margin-top: 15px;
    padding: 1em;
    width: 200px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    border-radius: .5em;
    font-size: 12px;
    line-height: 1.2;
    transition: opacity .5s;
    pointer-events: none;
}

.transparent {
  width: 0px;
  padding: 0px;
  color: transparent;
}

.annotation::before {
    cursor: pointer;
    pointer-events: all;
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
}
</style>
