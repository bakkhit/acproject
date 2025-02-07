<template>
  <div>
    <p>{{ selectedGame.name }}</p>
    <div v-for="(sequence, seqIndex) in selectedGame.mainQuest" :key="seqIndex">
      <h3>Sequence {{ seqIndex + 1 }}</h3>
      <li style="color: white;" v-for="(mission, index) in sequence.mission" :key="index">
        <input type="checkbox">{{ mission }}</input>
      </li>
    </div>
    <br>
    <p style="color: white;" v-for="quest in selectedGame.sideQuest">
      <input type="checkbox">{{ quest }}</input>
    </p>
  </div>
</template>

<script>
import { data } from "../assets/ACmissions";

export default {
  data() {
    return {
      quests: data[0],
      selectedGame: null
    };
  },
  created() {
    const gameClass = this.$route.params.gameClass;
    this.selectedGame = this.quests.find(game => game.name.includes(gameClass));
    console.log(gameClass)
    console.log(this.selectedGame.mainQuest)
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  color: white;
  text-align: center;
}

h2 {
  font-size: 1.8em;
  color: #ff6600;
  margin-top: 20px;
}

h3 {
  font-size: 1.5em;
  color: rgb(253, 59, 59);
  margin-top: 15px;
}

h4 {
  font-size: 1.3em;
  color: #ff6600;
  margin-top: 10px;
}

p {
  font-size: 1.2em;
  color: white;
  margin-left: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>