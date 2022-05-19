class Stack {

    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(element) {
        checkIsValidNumber(element);

        const node = new Node(element);

        if (!this.top) {
            this.top = new Node(element);
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++
    }

    pop() {
        if (!this.top) {
            throw new Error('A pilha está vazia.');
        }
        const deadNode = this.top;
        this.top = this.top.next;
        deadNode.next = null;
        this.length--;
        return deadNode.element;
    }

    peek() {
        if (!this.top) {
            return null;
        }
        return this.top.element;
    }

    isEmpty() {
        return !this.top;
    }

    size() {
        return this.length;
    }

    clear() {
        this.top = null;
        this.length = 0;
    }

    print(separator = ' - ') {
        let current = this.top;
        let result = '';
        while (current) {
            result += current.element + separator;
            current = current.next;
        }
        return result.slice(0, -separator.length);
    }
}