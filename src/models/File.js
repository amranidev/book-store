export default class File {

    constructor() {
        this.ref = ""
        this.file = null
        this.progress = (snapshot) => {}
        this.error = (error) => {}
        this.completed = (downloadURL) => {}
    }
}