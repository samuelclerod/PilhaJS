class StaticStack {

    constructor(){
        this.data = [];
    }
    
    push (element) {
        this.data.push(element);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data.length-1;
    }

    isEmpty() {
        return this.data.size()===0
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }
    
    print(separator=' - ') {
        
    }

}