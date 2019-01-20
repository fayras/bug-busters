<template>
  <div
    id="container"
    class="about"
  >
    <div
      ref="container"
      class="canvas-container"
    >
      <canvas ref="canvas" />
    </div>
  </div>
</template>
<script>
import Room3D from '@/components/Room3D';
// https://threejs.org/docs/#manual/en/introduction/Loading-3D-models

export default {
  name: 'Room',
  props: {
    id: String,
  },
  data() {
    return {
      room: null,
    };
  },
  computed: {
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
    this.room = new Room3D(this.$refs.canvas, this.$refs.container);
    this.room.onClick(intersect => console.log(intersect));
    this.$nextTick(() => {
      this.room.handleResize();
      this.room.loadRoom();
    });
  },
  beforeDestroy() {
    this.room.destroy();
  },
  methods: {

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
</style>
