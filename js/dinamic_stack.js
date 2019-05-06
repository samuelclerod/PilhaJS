class DinamicStack {

    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(element) {
        let node  = new Node(element);
        if (!this.isEmpty()) {
            node.next = this.top;
        }
        this.top = node;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) 
            return null;
        let diedNode = this.top;
        this.top = this.top.next;
        diedNode.next = null;
        this.length--;
        return diedNode.content;
    }

    peek() {
        return this.length-1;
    }

    isEmpty() {
        return this.top===null;
    }

    size() {
        return this.length;
    }

    clear() {
        this.top=null ;
        this.length = 0;
    }

    print(separator = ' - ') {
        let text = "", current = this.top;
        while (current!==null) {
            text += current.content + separator;
            current = current.next
        }
        return text.substr(0, text.length - separator.length);
    }
}