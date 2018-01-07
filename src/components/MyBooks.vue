<template>
    <div class="container">
        <md-layout md-gutter md-align="center">
            <md-whiteframe class="book-container">
                <h1>{{Welcome}}</h1>
            </md-whiteframe>
        </md-layout>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("component is ready!!")
    },
    data() {
        return {
            Welcome: "Welcome"
        }
    },
    methods: {
        // methods
    }
}
</script>

<style scoped>
.book-container {
    width: 70%;
}
</style>