<template>
  <div class="widget">
    <RouterLink :to="{name: 'achievments'}">
      <img :src="image" alt="Game Image" />
    </RouterLink>
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
  margin-left: 15%;
  width: 70%;
  object-fit: cover;
}
</style>