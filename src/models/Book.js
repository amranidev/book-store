export default class Book {

    constructor() {
        this.title = ""
        this.author = ""
        this.coverURL = ""
        this.coverRef = ""
        this.created = ""
        this.description = ""
    }

    toJson() {
        return {
            title: this.title,
            author: this.author,
            coverURL: this.coverURL,
            coverRef: this.coverRef,
            created: this.created,
            description: this.description
        }
    }
}