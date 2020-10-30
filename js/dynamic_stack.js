class DynamicStack {

    constructor() {
        this.top = null
        this.length = 0
    }

    push(element) {
        const newNode = new Node(element)
        newNode.next = this.top
        this.top = newNode
        this.length++
    }

    pop() {
        let deadNode = this.top
        this.top = this.top.next
        deadNode.next = null
        this.length--
        return deadNode.content
    }

    peek() {
        // return this.top ? this.top.content : null
        return this.top && this.top.content
    }

    isEmpty() {
        return !this.top
    }

    size() {
        return this.length
    }

    clear() {
        this.top = null
        this.length = 0
    }

    print(separator = ' - ') {
        let output = ''
        for (let i = this.top; i !== null; i = i.next)
            output += i.content + separator
        return output.substring(0, output.length - separator.length)
    }
}