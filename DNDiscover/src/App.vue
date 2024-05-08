<script setup>
import CustomHeader from './components/CustomHeader.vue'
</script>


<template>
  <custom-header />
  <router-view />
</template>

<!-- TODO: Transitions -->
<!-- TODO: Layout
SplashScreen
Homescreen
Homescreen
Map
Character Sheets
About
Account(?)
-->

<!-- TODO: Test v-for and other v-commands -->


<!-- TODO: Dice tray + rolling, Character Sheets, Note board.  -->
<!-- Dice Tray: 
Click on dice icon to the left (?), this slides a component to the right containing 3D (?) dice. You can add dice by clicking, and then button for roll.-->
<!-- Character Sheets:
Online template for character sheets, like editable pdf. -->
<!-- Note Board:
Click on note icon to the left (?), under/above dice. This slides a component to the right containing a note board. You can add notes, and delete them. 
 -->


 <!-- 
Fade In Animation:
  body {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

 -->