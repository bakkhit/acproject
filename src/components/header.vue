<template>
  <div id="header">
    <router-link to="/">
      <img src="/acGreyLogo.png" alt="logoHeader">
    </router-link>
    <nav>
      <ul>
        <li class="menuDeroulant">
          <a href="#" @click.prevent="toggleDropdown">GameS</a>
          <ul class="sousMenu" v-if="isDropdownOpen">
            <li class="ac1"><router-link to="/achivments" @click.native="emitClass('Assassins Creed')">Assassin'S <span class="redText">CREED</span></router-link></li>
            <li class="ac2"><router-link to="/achivments" @click.native="emitClass('Assassins Creed II')">Assassin'S <span class="redText">CREED II</span></router-link></li>
            <li class="acbh"><router-link to="/achivments" @click.native="emitClass('Assassins Creed Brotherhood')">Assassin'S <span class="creed">CREED <span class="redText">BrotherhooD</span></span></router-link></li>
            <li class="acrev"><router-link to="/achivments" @click.native="emitClass('Assassins Creed Revlations')">Assassin'S <span class="creed">CREED <span class="redText">RevelationS</span></span></router-link></li>
            <li class="ac3"><router-link to="/achivments" @click.native="emitClass('Assassins Creed III')">Assassin'S <span class="redText">CREED III</span></router-link></li>
            <li class="ac4"><router-link to="/achivments" @click.native="emitClass('Assassins Creed IV')">Assassin'S <span class="creed">CREED IV <br><span class="redText">Black flaG</span></span></router-link></li>
            <li class="acrogue"><router-link to="/achivments" @click.native="emitClass('Assassins Creed Rogue')">Assassin'S <span class="creed">CREED <span class="redText">RoguE</span></span></router-link></li>
            <li class="acunity"><router-link to="/achivments" @click.native="emitClass('Assassins Creed Unity')">Assassin'S <span class="creed">CREED <span class="redText">UnitY</span></span></router-link></li>
            <li class="acsyndicate"><router-link to="/achivments" @click.native="emitClass('Assassins Creed Syndicate')">Assassin'S <span class="creed">CREED <span class="redText">SyndicatE</span></span></router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isDropdownOpen = ref(false)
const router = useRouter()

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function emitClass(className) {
  router.push({ name: 'achievments', params: { gameClass: className } })
}
</script>

<style scoped>
@font-face {
  font-family: "Assassin";
  src: url('@/assets/fonts/Assassin.ttf') format('truetype');
}

* {
  font-family: "Assassin";
}

.redText {
  font-size: 0.6em;
  color: rgb(253, 59, 59);
}

.creed {
  font-size: 0.6em;
  color: white;
}

#header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #242424;
}

#header img {
  width: 30px;
  margin-right: 10px;
  margin-left: 15px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: white;
  padding: 0 1em;
  display: block;
}

nav ul li ul.sousMenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #242424;
  padding: 0;
  margin: 0;
  list-style: none;
}

nav ul li:hover ul.sousMenu {
  display: block;
}

nav ul li ul.sousMenu li {
  width: 100%;
}

nav ul li ul.sousMenu li a {
  text-align: center;
  padding: 0 fit-content;
  line-height: 0.5em;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>