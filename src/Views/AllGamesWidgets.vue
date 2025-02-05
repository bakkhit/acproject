<template>
  <div id="gamesContainer">
    <ACgamesWidget image="/src/assets/AC1logo.png" gameClass="Assassins Creed" />
    <ACgamesWidget image="/src/assets/AC2logo.svg" gameClass="Assassins Creed II" />
    <ACgamesWidget image="/src/assets/ACbhlogo.png" gameClass="Assassins Creed Brotherhood" />
    <ACgamesWidget image="/src/assets/ACrevlogo.png" gameClass="Assassins Creed Revelations" />
    <ACgamesWidget image="/src/assets/AC3logo.png" gameClass="Assassins Creed III" />
    <ACgamesWidget image="/src/assets/AC4logo.png" gameClass="Assassins Creed IV" />
    <ACgamesWidget image="/src/assets/ACroguelogo.png" gameClass="Assassins Creed Rogue" />
    <ACgamesWidget image="/src/assets/ACunitylogo.png" gameClass="Assassins Creed Unity" />
    <ACgamesWidget image="/src/assets/ACsyndicatelogo.png" gameClass="Assassins Creed Syndicate" />
  </div>
</template>

<script>
import ACgamesWidget from '../components/ACgamesWidget.vue'
export default {
  components: {
    ACgamesWidget
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
</style>