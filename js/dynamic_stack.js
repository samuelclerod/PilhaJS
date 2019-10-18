class DynamicStack {

    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(element) {
        let newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.top==null) 
            return null;
        let deadNode = this.top;
        this.top = this.top.next;
        deadNode.next = null;
        this.length--;
        return deadNode.element;
    }

    peek() {
        return this.top.element;
    }

    isEmpty() {
        return this.top==null;
    }

    size() {
        return this.length;
    }

    clear() {
        this.top= null;
        this.length=0;
    }

    print(separator = ' - ') {
        let s = "";
        for(let node = this.top; node!=null ; node=node.next)
            s+=node.element+separator;
        return s.substring(0, s.length-separator.length);
    }
}