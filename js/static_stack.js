class StaticStack {

    constructor(){
        this.data = new Array(10);
        this.top = -1;
    }
    
    push (element) {
        this.top++;
        this.data[this.top]= element;
    }

    pop() {
        this.top--;
    }

    peek() {
        if(this.top>=0){
            return this.data[this.top];
        }
        return null;
    }

    isEmpty() {
        return this.top==-1;
    }

    size() {
        return this.top+1;
    }

    clear() {
        this.top = -1;
    }
    
    print(separator=' - ') {
        let s = '';
        for(let i = this.top; i>=0 ; i--){
            s+=this.data[i]+separator;
        }
        return s.substring(0, s.length-separator.length);
    }
}