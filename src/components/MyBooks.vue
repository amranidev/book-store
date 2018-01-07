<template>
    <div class="container">
        <md-layout md-gutter>
            <md-layout v-for="(b,index) in books" :key="index" md-flex-small="100" md-flex-xsmall="100" md-flex-medium="30">
                <md-card class="book-card">
                    <md-card-header>
                        <md-card-media md-medium>
                            <img :src="b.cover" alt="People">
                        </md-card-media>
                        <div class="md-title">{{b.title}}</div>
                        <div class="md-subhead">{{b.author}}</div>
                    </md-card-header>

                    <md-card-actions>
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                    </md-card-actions>

                    <md-card-content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                    </md-card-content>
                </md-card>
            </md-layout>
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
        // methods
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