export default class Book {

    constructor() {
        this.title = ""
        this.author = ""
        this.cover = null
        this.created = ""
    }

    toJson() {
        return {
            title: this.title,
            author: this.author,
            cover: this.cover,
            created: this.created
        }
    }
}