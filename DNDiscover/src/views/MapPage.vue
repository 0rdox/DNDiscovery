<template>

    <body
        :style="{ backgroundImage: `url(${selectedFile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }"
        class="border-4 border-zinc-800 border-dashed h-screen p-5">
        <!-- Dropzone -->
        <div class="flex justify-center fixed bottom-10 left-0 right-0">
            <label for="dropzone-file"
                class="flex items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <!-- svg for upload icon, change to <i> maybe -->
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                            upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PNG or JPG</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" accept="image/png, image/jpeg"
                    @change="handleFileChange" />
            </label>
        </div>
        <!-- End Dropzone -->


        <!-- API? -->
        <p>{{ apiData }}</p>
    </body>
</template>

<script lang="ts">
export default {
    data() {
        return {
            apiData:null,
            selectedFile: null,
        }
    },
    mounted: function() {
        this.fetchData();
    },
    methods:{
        async fetchData() {
            try {
               const response = await fetch('https://jsonplaceholder.typicode.com/posts');
               const data = await response.json();
               this.apiData = data.slice(0, 5); 
            } catch(error) {
                console.error(error);
            }
        },
        handleFileChange(event: Event) {
      const file = (event.target as HTMLInputElement)?.files?.[0]
      const reader = new FileReader()

      console.log('Handle File')
      if (!file) return // Add this line to check if file is undefined

      reader.onload = (e) => {
        this.selectedFile = e.target?.result
      }

      reader.readAsDataURL(file)
    },
    }
}

</script>
