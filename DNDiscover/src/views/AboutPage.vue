<template>
    <p>ABOUT</p>
</template>

<script lang='ts'>
export default {
    data() {
        return {
            apiData: null
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                this.apiData = data.slice(0, 5);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
