<template>
  <div id="container">
    <div class="logo">
      <img v-if="images.length" :src="images[0].src" :alt="images[0].alt" />
    </div>
    <p v-if="date">{{ date }}</p>
    <div v-if="images.length > 1" class="mainCharacter">
      <img v-for="(image, index) in images.slice(1)" :src="image.src" :alt="image.alt" :key="image.alt" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  selectedPoint: Number
});

const images = ref([]);
const date = ref("");

watch(() => props.selectedPoint, (newPoint) => {
  updateImages(newPoint);
});

function updateImages(point) {
  const imageSets = {
    1: { 
      date: "1191", 
      images: [
        { src: '/src/assets/AC1logo.png', alt: 'Assassins Creed' },
        { src: '/src/assets/altair.png', alt: 'Assassins Creed Image 2' }
      ]
    },
    2: { 
      date: "1476", 
      images: [
        { src: '/src/assets/AC2logo.svg', alt: 'Assassins Creed II' },
        { src: '/src/assets/ezioAC2.webp', alt: 'Assassins Creed II Image 2' }
      ]
    },
    3: { 
      date: "1500", 
      images: [
        { src: '/src/assets/ACbhlogo.png', alt: 'Assassins Creed Brotherhood' },
        { src: '/src/assets/ezioBh.webp', alt: 'Assassins Creed Brotherhood Image 2' }
      ]
    },
    4: { 
      date: "1511", 
      images: [
        { src: '/src/assets/ACrevlogo.png', alt: 'Assassins Creed Revelations' },
        { src: '/src/assets/ezioRev.png', alt: 'Assassins Creed Revelations Image 2' }
      ]
    },
    5: { 
      date: "1775", 
      images: [
        { src: '/src/assets/AC3logo.png', alt: 'Assassins Creed III' },
        { src: '/src/assets/Connor.webp', alt: 'Assassins Creed III Image 2' }
      ]
    },
    6: { 
      date: "1715", 
      images: [
        { src: '/src/assets/AC4logo.png', alt: 'Assassins Creed IV' },
        { src: '/src/assets/Edward.png', alt: 'Assassins Creed IV Image 2' }
      ]
    },
    7: { 
      date: "1752", 
      images: [
        { src: '/src/assets/ACroguelogo.png', alt: 'Assassins Creed Rogue' },
        { src: '/src/assets/Shay.png', alt: 'Assassins Creed Rogue Image 2' }
      ]
    },
    8: { 
      date: "1789", 
      images: [
        { src: '/src/assets/ACunitylogo.png', alt: 'Assassins Creed Unity' },
        { src: '/src/assets/Arno.png', alt: 'Assassins Creed Unity Image 2' }
      ]
    },
    9: { 
      date: "1868", 
      images: [
        { src: '/src/assets/ACsyndicatelogo.png', alt: 'Assassins Creed Syndicate' },
        { src: '/src/assets/Evie.webp', alt: 'Assassins Creed Syndicate Image 2' },
        { src: '/src/assets/Jacob.webp', alt: 'Assassins Creed Syndicate Image 3' }
      ]
    }
  };

  const selectedSet = imageSets[point] || { date: "", images: [] };
  images.value = selectedSet.images;
  date.value = selectedSet.date;
}
</script>


<style scoped>
#container {
  padding-left: 5%;
  width: 100%;
  height: 65vh;
  background-color: gray;
  border-radius: 50px;
}

img.logo {
  max-width: 30%;
  height: auto;
  display: block;
  margin: 10px 0;
}

.mainCharacter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.mainCharacter img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}

.mainCharacter {
  display: flex;
  align-items: center;
  width: 100%;
  height: 65%;
  flex-wrap: nowrap;
  justify-content: center;
}

.logo {
  width: auto;
  height: 20%;
  justify-self: left;
}

.logo img{
  height: 100%;
}

.mainCharacter img {
  filter: drop-shadow(0px 0px 15px black);
  height: 80%;
}
</style>