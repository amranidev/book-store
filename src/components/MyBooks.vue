<template>
    <div class="container">
        <md-layout md-gutter>
            <md-layout v-for="(b,index) in books" :key="index" md-flex-small="100" md-flex-xsmall="100" md-flex-medium="30">
                <md-card class="book-card">
                    <md-card-header>
                        <div class="md-title">{{b.title}}</div>
                        <div class="md-subhead">{{b.author}}</div>
                    </md-card-header>
                    <md-card-media md-ratio="1/1">
                        <img :src="b.coverURL" alt="People">
                    </md-card-media>
                    <md-card-actions>
                        <md-button @click="remove(b)" class="md-raised md-accent">Delete
                            <md-icon>delete</md-icon>
                        </md-button>
                        <md-button class="md-raised md-primary">Edit
                            <md-icon>edit</md-icon>
                        </md-button>
                    </md-card-actions>
                    <md-card-content>
                        {{b.description}}
                    </md-card-content>
                </md-card>
            </md-layout>
        </md-layout>
        <md-layout md-align="center">
            <h1 v-if="!books.length">Empty</h1>
        </md-layout>
    </div>
</template>

<script>
export default {
    firestore() {
        return {
            books: this.$store.state.firestore.collection("books").orderBy("created", "desc")
        }
    },
    data() {
        return {
            Welcome: "Welcome"
        }
    },
    methods: {
        remove(book) {
            var coverRef = book.coverRef
            this.$store.state.firestore.collection("books").doc(book['.key']).delete().then(() => {
                this.$storage.delete({
                    ref: coverRef,
                    result: () => {
                        console.log("Done")
                    },
                    error: (err) => {
                        console.error(err.message)
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
.book-container {
    padding: 15px;
    /*width: 70%;*/
}

.book-card {
    margin: 10px;
}
</style>