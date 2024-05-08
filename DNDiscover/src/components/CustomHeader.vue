<template>
  <nav v-if="!$route.meta.hideNavbar" class="flex justify-center">
    <div class="border-4  border-zinc-800 rounded-md solid bg-zinc-800 px-2">
      <router-link to="/home"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">Home</router-link>
      <p class="inline-block p-3">|</p>
      <router-link to="/map"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">Map</router-link>
      <p class="inline-block p-3">|</p>
      <router-link to="/about"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">About</router-link>
      <p class="inline-block p-3">|</p>
      <router-link to="/character"
        class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out p-3 inline-block">Character</router-link>
    </div>
  </nav>
    </template>