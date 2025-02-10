<template>
  <div>
    <p>{{ selectedGame.name }}</p>
    <div v-for="(sequence, seqIndex) in selectedGame.mainQuest" :key="seqIndex">
      <h3>Sequence {{ seqIndex + 1 }}</h3>
      <p style="color: white;" v-for="(mission, index) in sequence.mission" :key="index">
        <input v-model="checkedMissions[seqIndex][index]" @change="handleCheckboxChange" :id="index" type="checkbox">{{ mission }}</input>
      </p>
    </div>
    <br>
    <div v-for="(value, key) in selectedGame.sideQuest" :key="key" style="color: white; display: flex; align-items: center;">
      <label>{{ key }}: </label>
      <input type="number" :min="0" :max="value" v-model.number="sideQuestCounters[key]" style="margin-left: 10px; width: 50px;">
      <p>/ {{ value }}</p>
      <button @click="incrementCounter(key, value)">+</button>
      <button @click="decrementCounter(key)">-</button>
    </div>
    <p>Total checked missions: {{ totalCheckedMissions }}</p>
  </div>
</template>

<script>
import { data } from "../assets/ACmissions";
import { useQuestStore } from "../stores/quete";

export default {
  data() {
    return {
      quests: data[0],
      selectedGame: null,
      sideQuestCounters: {},
      checkedMissions: []
    };
  },
  created() {
    const gameClass = this.$route.params.gameClass;
    this.selectedGame = this.quests.find(game => game.name.includes(gameClass));
    this.initializeCounters();
    this.initializeCheckedMissions();
  },
  methods: {
    initializeCounters() {
      this.sideQuestCounters = Object.keys(this.selectedGame.sideQuest).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
      }, {});
    },
    initializeCheckedMissions() {
      const savedMissions = JSON.parse(localStorage.getItem(`checkedMissions_${this.selectedGame.name}`));
      if (savedMissions) {
        this.checkedMissions = savedMissions;
      } else {
        this.checkedMissions = this.selectedGame.mainQuest.map(sequence => 
          sequence.mission.map(() => false)
        );
      }
    },
    incrementCounter(key, max) {
      if (this.sideQuestCounters[key] < max) {
        this.sideQuestCounters[key]++;
      }
    },
    decrementCounter(key) {
      if (this.sideQuestCounters[key] > 0) {
        this.sideQuestCounters[key]--;
      }
    },
    handleCheckboxChange() {
      localStorage.setItem(`checkedMissions_${this.selectedGame.name}`, JSON.stringify(this.checkedMissions));
    }
  },
  computed: {
    totalCheckedMissions() {
      return this.checkedMissions.flat().filter(Boolean).length;
    }
  },
  watch: {
    sideQuestCounters: {
      handler(newVal) {
        for (const key in newVal) {
          if (newVal[key] > this.selectedGame.sideQuest[key]) {
            this.sideQuestCounters[key] = this.selectedGame.sideQuest[key];
          }
        }
      },
      deep: true
    }
  }
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