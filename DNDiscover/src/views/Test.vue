<template>
  <body class="h-screen">
    <div class="flex justify-center mt-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search titles"
        class="p-2 border border-gray-300 rounded-md mb-4 w-1/4"
      />
      <div class="mb-4 ml-2">
        <label class="text-white mr-2">Max price</label>
        <input
          type="number"
          placeholder="€"
          v-model="priceQuery"
          min="0"
          class="p-2 w-20 border-gray-300 border rounded-md"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-rows-3 lg:grid-cols-4 gap-2 md:grid-cols-2 xs:grid-cols-1">
        <div v-for="item in filteredData" :key="item.id" class="bg-red-200">
          <div class="bg-blue-400 w-48 h-60">{{ item.title }}</div>
          <span>{{ item.id }}</span>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onMounted } from 'vue'

const apiData = ref(null)
const searchQuery = ref('')
const priceQuery = ref(null) // Add priceQuery ref

onMounted(() => {
  getApi()
})

async function getApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    apiData.value = data
  } catch (e) {
    console.log(e)
  }
}

const filteredData = computed(() => {
  if (!apiData.value) return []
  return apiData.value.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const priceMatch = priceQuery.value ? item.id <= priceQuery.value : true
    return titleMatch && priceMatch
  })
})
</script>
