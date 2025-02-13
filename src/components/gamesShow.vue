<template>
  <div id="container">
    <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.alt" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  selectedPoint: Number
});

const images = ref([]);

watch(() => props.selectedPoint, (newPoint) => {
  updateImages(newPoint);
});

function updateImages(point) {
  const imageSets = {
    1: [
      { src: '/src/assets/AC1logo.png', alt: 'Assassins Creed' },
      { src: '/src/assets/AC1image2.png', alt: 'Assassins Creed Image 2' }
    ],
    2: [
      { src: '/src/assets/AC2logo.svg', alt: 'Assassins Creed II' },
      { src: '/src/assets/AC2image2.png', alt: 'Assassins Creed II Image 2' }
    ],
    3: [
      { src: '/src/assets/ACbhlogo.png', alt: 'Assassins Creed Brotherhood' },
      { src: '/src/assets/ACbhimage2.png', alt: 'Assassins Creed Brotherhood Image 2' }
    ],
    4: [
      { src: '/src/assets/ACrevlogo.png', alt: 'Assassins Creed Revelations' },
      { src: '/src/assets/ACrevimage2.png', alt: 'Assassins Creed Revelations Image 2' }
    ],
    5: [
      { src: '/src/assets/AC3logo.png', alt: 'Assassins Creed III' },
      { src: '/src/assets/AC3image2.png', alt: 'Assassins Creed III Image 2' }
    ],
    6: [
      { src: '/src/assets/AC4logo.png', alt: 'Assassins Creed IV' },
      { src: '/src/assets/AC4image2.png', alt: 'Assassins Creed IV Image 2' }
    ],
    7: [
      { src: '/src/assets/ACroguelogo.png', alt: 'Assassins Creed Rogue' },
      { src: '/src/assets/ACrogueimage2.png', alt: 'Assassins Creed Rogue Image 2' }
    ],
    8: [
      { src: '/src/assets/ACunitylogo.png', alt: 'Assassins Creed Unity' },
      { src: '/src/assets/ACunityimage2.png', alt: 'Assassins Creed Unity Image 2' }
    ],
    9: [
      { src: '/src/assets/ACsyndicatelogo.png', alt: 'Assassins Creed Syndicate' },
      { src: '/src/assets/ACsyndicateimage2.png', alt: 'Assassins Creed Syndicate Image 2' }
    ]
  };

  images.value = imageSets[point] || [];
}
</script>

<style scoped>
#container {
  width: 100px;
  height: 100px;
  background-color: white;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}
</style>