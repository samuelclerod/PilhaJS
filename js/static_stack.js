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
        return this.data.length -1 ;
    }

    isEmpty() {
        return (this.size()===0);
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }
    
    print(separator=' - ') {
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--) {
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = "";
        for (let index = (this.data.length - 1); index >= 0; index--) {
            text += this.data[index] + separator;
        }
        return text.substr(0, text.length - separator.length);
    }
}