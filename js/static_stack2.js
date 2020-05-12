class StaticStack2 {

    constructor() {
        this.data = new Array()
    }

    push(element) {
        this.data.push(element)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    isEmpty() {
        return this.data.length == 0
    }

    size() {
        return this.data.length
    }

    clear() {
        this.data = new Array()
    }

    print(separator = ' - ') {
        let output = ""
        for (let i = this.data.length - 1; i >= 0; i--) {
            output = output + this.data[i] + separator
        }
        if (this.data.length >= 0) {
            output = output.substr(0, output.length - separator.length)
        }
        return output
    }
}