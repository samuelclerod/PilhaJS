class StaticStack {

    constructor(){
        this.items= []
    }
    
    push (element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items.length-1;
    }

    isEmpty() {
        return this.items.length===0
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items=[];
    }
    
    print(separator=' - ') {
        if(this.isEmpty()) return "";
        let top = this.peek(),
            s = this.items[top];
        for (let i = top-1; i >=0; i--)
            s+=separator+this.items[i]
        return s;
    }
}