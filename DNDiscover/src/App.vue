<script setup>
import CustomHeader from './components/CustomHeader.vue'
</script>


<template>
  <!-- <ButtonCounter /> -->
  <!-- <CustomHeader /> -->

  <!-- Navigation -->
  <nav v-if="!$route.meta.hideNavbar" class="absolute right-0 left-0 flex  justify-center">
    <div class="border-4  border-zinc-800 rounded-md solid bg-zinc-800 px-2">
      <router-link to="/"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">Home</router-link>
      <p class="inline-block p-3">|</p>
      <router-link to="/map"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">Map</router-link>
      <p class="inline-block p-3">|</p>
      <router-link to="/about"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">About</router-link>
    </div>
  </nav>
  <!-- Router View -->
  <router-view />

  <!-- TODO: Transitions -->



  <!-- TODO: Dice tray + rolling, Character Sheets, Note board.  -->
  <!-- Dice Tray: 
Click on dice icon to the left (?), this slides a component to the right containing 3D (?) dice. You can add dice by clicking, and then button for roll.-->
  <!-- Character Sheets:
Online template for character sheets, like editable pdf. -->
  <!-- Note Board:
Click on note icon to the left (?), under/above dice. This slides a component to the right containing a note board. You can add notes, and delete them. 
 -->
</template>
