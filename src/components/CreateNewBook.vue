<template>
    <div class="container">
        <md-layout md-gutter md-align="center">
            <md-whiteframe class="book-form">
                <h1>Create new Boook</h1>
                <form @submit.stop.prevent="submit">
                    <md-input-container>
                        <label>Title</label>
                        <md-input v-model.trim="book.title"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Author</label>
                        <md-input v-model.trim="book.author"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Cover</label>
                        <md-file @change.native="getFile"></md-file>
                    </md-input-container>
                    <md-input-container md-theme="default">
                        <label>Description</label>
                        <md-textarea v-model.trim="book.description"></md-textarea>
                    </md-input-container>
                    <md-button type="submit" class="md-raised md-primary">Create new Book</md-button>
                </form>
            </md-whiteframe>
        </md-layout>
        <div id="spinner" class="overlay" v-if="spinner">
            <div class="flex-spinner">
                <md-spinner :md-size="150" md-indeterminate></md-spinner>
            </div>
        </div>
    </div>
</template>

<script>

import Book from "@/models/Book"
import File from "@/models/File"

export default {

    firestore() {
        return {
            books: this.$store.state.firestore.collection("books")
        }
    },
    data() {
        return {
            book: new Book(),
            file: new File(),
            spinner: false
        }
    },
    methods: {
        submit() {
            // upload and add a new book record to the database.
            this.spinner = true
            this.$storage.upload(this.file)
        },
        getFile(e) {
            if (!e.target.files[0]) {
                return
            }
            this.file.file = e.target.files[0]

            this.file.ref = `/images/books/${this.file.file.name}`
            this.book.coverRef = this.file.ref
            this.file.completed = (downloadURL) => {
                console.log(downloadURL)
                this.book.coverURL = downloadURL
                this.book.created = this.$store.state.firebase.firestore.FieldValue.serverTimestamp()
                this.$firestore.books.add(this.book.toJson()).then(() => {
                    this.spinner = false
                    console.log("Done!!")
                    this.$router.push('book')
                }).catch((err) => {
                    this.spinner = false
                })
            }

            this.file.error = (err) => {
                console.error(err.message)
            }
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