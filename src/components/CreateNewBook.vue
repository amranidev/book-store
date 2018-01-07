<template>
    <div class="container">
        <md-layout md-gutter md-align="center">
            <md-whiteframe class="book-form">
                <h1>Create new Boook</h1>
                <form @submit.stop.prevent="submit">
                    <md-input-container>
                        <label>Title</label>
                        <md-input v-model="book.title"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Author</label>
                        <md-input v-model="book.author"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Cover</label>
                        <md-file @change.native="getFile"></md-file>
                    </md-input-container>
                    <md-button type="submit" class="md-raised md-primary">Create new Book</md-button>
                </form>
            </md-whiteframe>
        </md-layout>
    </div>
</template>

<script>

import Book from "@/models/Book"
import File from "@/models/File"

export default {
    mounted() {
        console.log("component is ready!!")
    },
    firestore(){
        return {
            books: this.$store.state.firestore.collection("books")
        }
    },
    data() {
        return {
            book: new Book(),
            file: new File()
        }
    },
    methods: {
        submit() {
            // console.log(this.fifo)
            // Upload the Image first
            // this.$storage.upload({})
        },
        getFile(e){
            this.book.cover = e.target.files[0]
        }
    }
}
</script>

<style scoped>
.book-form {
    width: 80%;
    padding: 15px;
}
</style>