class StaticStack {

    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        const lastIndex = this.data.length - 1;
        return this.data[lastIndex];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }

    print(separator = ' - ') {
        let s = '';
        for (let i = this.data.length - 1; i >= 0; i--) {
            s += this.data[i] + separator;
        }
        return s.substr(0, (s.length - separator.length));
    }
}