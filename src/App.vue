<template>
  <div id="app">
    <Header />
    <TextHeader />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import ACgamesWidget from './components/ACgamesWidget.vue';
import Footer from './components/footer.vue';
import Header from './components/header.vue';
import TextHeader from './components/textHeader.vue';

export default {
  components: {
    ACgamesWidget,
    Footer,
    Header,
    TextHeader
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

#gamesContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5em;
  padding: 1em;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 60px; /* Adjust this value based on the height of your footer */
  height: 60px; /* Adjust this value based on the height of your footer */
  width: 100%;
  margin-top: auto;
}
</style>
