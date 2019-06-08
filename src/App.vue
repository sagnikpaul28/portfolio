<template>
  <div id="app">
    <Intro />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Intro,
    Skills,
    Projects,
    About,
    Contact,
    Footer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
}
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
