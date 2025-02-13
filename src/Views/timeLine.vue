<template>
  <div id="augh">
    <div class="timeline">
      <div 
        class="point" 
        v-for="n in 9" 
        :key="n" 
        :id="'point-' + n" 
        @click="selectPoint(n)"
      ></div>
    </div>
    <GamesShow :selectedPoint="selectedPoint" />
  </div>
</template>

<script>
import GamesShow from '../components/gamesShow.vue';

export default {
  name: 'TimeLine',
  components: {
    GamesShow
  },
  data() {
    return {
      selectedPoint: null
    };
  },
  methods: {
    selectPoint(point) {
      this.selectedPoint = point;
    }
  }
}
</script>

<style scoped>
#augh {
  display: flex;
}

.timeline {
  position: relative;
  width: 3px;
  height: 50vh;
  background-color: white;
  margin: 10%;
}

.point {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border: solid #242424 3px;
}

.point:hover {
  border: solid rgb(253, 59, 59) 5px;
}

.point:nth-child(1) { top: 0%; }
.point:nth-child(2) { top: 12.5%; }
.point:nth-child(3) { top: 25%; }
.point:nth-child(4) { top: 37.5%; }
.point:nth-child(5) { top: 50%; }
.point:nth-child(6) { top: 62.5%; }
.point:nth-child(7) { top: 75%; }
.point:nth-child(8) { top: 87.5%; }
.point:nth-child(9) { top: 100%; }
</style>