<template>
  <div id="app">
    <Intro />
  </div>
</template>

<script>
import Intro from "./components/Intro";

export default {
  name: "app",
  components: {
    Intro
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  cursor: url("/circle.svg") 18 18, auto;
}
canvas {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
