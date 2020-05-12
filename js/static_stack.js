class StaticStack {

    constructor() {
        this.data = new Array()
        this.top = -1
    }

    push(element) {
        this.top++
        this.data[this.top] = element
    }

    pop() {
        if (this.top >= 0) {
            this.top--
            return this.data[this.top + 1]
        }

    }

    peek() {
        return this.data[this.top]
    }

    isEmpty() {
        return this.top < 0
    }

    size() {
        return this.top + 1
    }

    clear() {
        this.top = -1
    }

    print(separator = ' - ') {
        let output = ""
        if (this.top < 0)
            return output
        for (let i = this.top; i >= 0; i--) {
            output = output + this.data[i] + separator
        }
        return output.substr(0, output.length - separator.length)
    }
}