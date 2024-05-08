<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-4 w-2/5 h-1/5 gap-4 ">
            <div class="bg-red-900 m-2 overflow-hidden p-4 text-white" v-for="item in apiData" :key="item.id">
                <p class="text-lg font-bold">{{ item.id }}</p>
                <p class="text-sm">{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
const apiData = ref(null);

onMounted(() => {
    getApi();
})
async function getApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        apiData.value = data;
    } catch (e) {
        console.log(e.getMessage());
    }
}


</script>