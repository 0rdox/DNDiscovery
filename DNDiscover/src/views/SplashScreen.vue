<script>
import { ref } from 'vue'

export default {
    setup() {
        const show = ref(true);

        return {
            show
        }

    },

}

</script>

<template>

    <!-- <div>{{ apiData }}</div> -->

    <div class="flex flex-col justify-center items-center  w-screen h-screen">
        <h1 class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out cursor-default">DNDiscover
        </h1>


        <!-- Transition Example -->
        <!-- <button @click="show = !show">Toggle</button>
        <Transition>
            <p v-if="show">hello</p>
        </Transition> -->


        <RouterLink to="/home" class="logo" draggable="false">
            <img src="@/assets/dice_white.png" alt="Vue logo" width="225" height="225" draggable="false" />
        </RouterLink>

    </div>



</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.logo {
    transition: all 0.5s ease;
}

.logo:hover {
    transform: rotate(-360deg);
}
</style>
