class DinamicStack {

    constructor(){
        this.top = null;
        this.length = 0;
    }
    
    push (element) {
        let node = new Node(element);
        if(this.isEmpty()){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }

    pop() {
        if(this.isEmpty())
            return null;
        let node = this.top;
        this.top = this.top.next
        node.next = null;
        this.length--;
        return node.element;
    }

    peek() {
        return this.length-1;
    }

    isEmpty() {
        return this.length===0;
    }

    size() {
        return this.length;
    }

    clear() {
        this.top = null;
        this.length = 0;
    }

    print(separator=' - ') {
        if (this.isEmpty())
            return '';

        let s = ''+this.top.element,
            current = this.top.next;
        while(current){
            s+=separator+current.element;
            current = current.next;
        }
        return s;
    }

}