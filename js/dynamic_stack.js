class DynamicStack {

    constructor() {
        this.top
    }

    push(element) {
        const newNode = new Node(element)
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        const deathNode = this.top
        this.top = this.top.next
        deathNode.next = null
        return deathNode.element
    }

    peek() {
        return this.top.element
    }

    isEmpty() {
        return this.top == null
    }

    size() {
        let count = 0;
        this._navigator(node => count++)
        return count;
    }

    clear() {
        this.top = null
    }

    print(separator = ' - ') {
        let output = '';
        this._navigator(node => output += node.element + separator)
        return this._removeLastSeparator(output, separator)
    }

    _removeLastSeparator(text, separator) {
        if (this.top)
            text = text.substring(0, text.length - separator.length)
        return text
    }

    _navigator(callback) {
        let i = this.top;
        while (i != null) {
            callback(i)
            i = i.next
        }
    }

}