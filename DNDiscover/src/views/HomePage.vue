<template>
    <div class="flex justify-center items-center w-screen h-screen ">
        <RouterLink to="/about" class="logo">
            <img src="@/assets/dice_white.png" alt="Vue logo" width="225" height="225" draggable="false" />
        </RouterLink>
    </div>
</template>

<style>
    .logo {
        transition: all 0.5s ease;
    }

    .logo:hover {
        transform: rotate(-360deg);
        color: green;
    }
</style>
