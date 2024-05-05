<template>
    <p>ABOUT</p>
    <p>{{ apiData }}</p>
</template>

<script>
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
                const response = await fetch('http://localhost:8081/status');
                const data = await response.json();
                this.apiData = data.message;
                
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
