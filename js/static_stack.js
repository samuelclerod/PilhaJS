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
        return this.size()===0
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }

    print(separator=' - ') {
        if (this.isEmpty())
            return '';
        let s = ''+this.data[this.peek()];
        for (let i = this.peek()-1; i >=0; i--)
            s+=separator+this.data[i];
        return s;
    }

}