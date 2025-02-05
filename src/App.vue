<template>
  <Header />
  <TextHeader />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router';
import ACgamesWidget from './components/ACgamesWidget.vue'
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
#gamesContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5em;
  padding: 1em;
}

#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
