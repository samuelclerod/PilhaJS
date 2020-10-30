class StaticStack {

    constructor() {
        this.data = []
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
        return this.data.length === 0
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = []
    }

    _reversedData() {
        let reversedData = []
        for (let i = (this.data.length - 1); i >= 0; i--)
            reversedData.push(this.data[i])
        return reversedData
    }

    print(separator = ' - ') {
        return this._reversedData().join(separator)
    }
}