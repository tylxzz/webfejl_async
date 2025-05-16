class ViewDataController {
    #div

    constructor() {
        this.#div = document.createElement('div')
        document.body.append(this.#div)
        this.#div.textContent = "Loading..."
    }

    renderData(array) {
        this.#div.innerHTML = ""
        for(const item of array) {
            const div = document.createElement('div')
            div.textContent = item.name + " " + item.age + " " + item.sex
            this.#div.append(div) 
        }
    }
}