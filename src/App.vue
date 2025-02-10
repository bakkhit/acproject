<template>
  <div id="app">
    <Header />
    <TextHeader />
    <RouterView class="content" />
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

.content {
  flex: 1;
}

#gamesContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5em;
  padding: 1em;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 60px; /* Adjust this value based on the height of your footer */
  height: 60px; /* Adjust this value based on the height of your footer */
  margin-top: auto;
  width: 100%;
}
</style>
