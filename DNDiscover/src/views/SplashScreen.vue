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
    <div class="flex flex-col justify-center items-center  w-screen h-screen">
        <h1 class="text-white font-bold hover:scale-125 transition duration-500 ease-in-out cursor-default">DNDiscover
        </h1>
        <RouterLink to="/home" class="logo" draggable="false">
            <img src="@/assets/dice_white.png" alt="Vue logo" width="225" height="225" draggable="false" />
        </RouterLink>
    </div>
</template>

<style scoped>
.logo {
    transition: all 0.5s ease;
}

.logo:hover {
    transform: rotate(-360deg);
}
</style>
