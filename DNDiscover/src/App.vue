<template>
  <!-- Navigation -->
  <nav class="absolute right-0 left-0 flex justify-center">
    <div class="border rounded-md solid px-2">
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

</template>
