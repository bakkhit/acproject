<template>
  <div class="widget">
    <img :src="image" alt="Game Image" />
  </div>
</template>

<script setup>
defineProps({
  image: String,
  link: String,
})
</script>

<style scoped>
.widget {
  display: flex;
  background-color: aliceblue;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  transition: scale 0.3s;
}

.widget:hover {
  cursor: pointer;
  scale: 1.1;
}

.widget img {
  width: 70%;
  object-fit: cover;
}
</style>