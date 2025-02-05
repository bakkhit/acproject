<template>
  <div id="gamesContainer">
    <router-link to="/achivments/Assassins Creed" class="widgets"><ACgamesWidget image="/src/assets/AC1logo.png" gameClass="Assassins Creed" /></router-link>
    <router-link to="/achivments/Assassins Creed II" class="widgets"><ACgamesWidget image="/src/assets/AC2logo.svg" gameClass="Assassins Creed II" /></router-link>
    <router-link to="/achivments/Assassins Creed Brotherhood" class="widgets"><ACgamesWidget image="/src/assets/ACbhlogo.png" gameClass="Assassins Creed Brotherhood" /></router-link>
    <router-link to="/achivments/Assassins Creed Revelations" class="widgets"><ACgamesWidget image="/src/assets/ACrevlogo.png" gameClass="Assassins Creed Revelations" /></router-link>
    <router-link to="/achivments/Assassins Creed III" class="widgets"><ACgamesWidget image="/src/assets/AC3logo.png" gameClass="Assassins Creed III" /></router-link>
    <router-link to="/achivments/Assassins Creed IV" class="widgets"><ACgamesWidget image="/src/assets/AC4logo.png" gameClass="Assassins Creed IV" /></router-link>
    <router-link to="/achivments/Assassins Creed Rogue" class="widgets"><ACgamesWidget image="/src/assets/ACroguelogo.png" gameClass="Assassins Creed Rogue" /></router-link>
    <router-link to="/achivments/Assassins Creed Unity" class="widgets"><ACgamesWidget image="/src/assets/ACunitylogo.png" gameClass="Assassins Creed Unity" /></router-link>
    <router-link to="/achivments/Assassins Creed Syndicate" class="widgets"><ACgamesWidget image="/src/assets/ACsyndicatelogo.png" gameClass="Assassins Creed Syndicate" /></router-link>
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
.widgets{
  display: flex;
  background-color: aliceblue;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
}
</style>