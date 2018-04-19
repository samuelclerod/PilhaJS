class DynamicStack {

    constructor(){
        this.top = null;
        this.length = 0;
    }
    
    push (element) {
        let node = new Node(element);
        if(this.length>0)
            node.next=this.top;  
        this.top=node;
        this.length++
    }

    pop() {
        let current = this.top;
        if(!current) return null;
        this.top=current.next;
        current.next=null;
        this.length--;
        return current.element;
    }

    peek() {
        return this.length-1;
    }

    isEmpty() {
        return this.top===null
    }

    size() {
        return this.length;
    }

    clear() {
        this.top=null;
        this.length=0;
    }

    print(separator=" - ") {
        if(!top) return "";
        let current = this.top.next,
            s=this.top.element;
        while(current){
            s+=separator+current.element;
            current=current.next;
        }
        return s;
    }
}