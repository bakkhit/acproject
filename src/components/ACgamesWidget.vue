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
}

.widget img {
  width: 70%;
  object-fit: cover;
}
</style>