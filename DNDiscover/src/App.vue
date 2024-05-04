<template>

<nav>
    <router-link to="/">Home</router-link>
    <router-link to="/map">Map</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
</template>



<!-- <template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/map">Map</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

</template>

<style>
.fade-enter-from, .fade-leave-tp {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
</style> -->
