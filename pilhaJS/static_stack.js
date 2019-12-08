class StaticStack {
     //empilhar, desempilhar, limpar
     //Stack (pilha, em português) é uma coleção de itens ou estrutura de dados,
     //onde a adição e a remoção de um item é feita pela mesma saída. Essa saída
     //é comumente chamada de “top” e o extremo oposto é chamado de “base”.
    constructor(){
        this.data = new Array(10);
        this.top = -1;
        //Stack()	construtor: cria uma pilha de Items vazia
    }
    
    push (element) {
        this.top++;
        this.data[this.top]= element;
        //push(Item item)	insere item nesta pilha
        //empilhar
    }

    pop() {
        this.top--;
        //pop()	remove o Item mais recente desta pilha
        //desempilhar
    }

    peek() {
        //é usado para recuperar ou buscar o primeiro elemento da pilha
        //ou o elemento presente na parte superior da pilha. 
        //O elemento recuperado não é excluído ou removido da pilha.
        if(this.top>=0){
            return this.data[this.top];
        }
        return null;
    }

    isEmpty() {
        return this.top==-1;
        //isEmpty()	esta pilha está vazia?
    }

    size() {
        return this.top+1;
        //size()	número de Items nesta pilha
    }

    clear() {
        this.top = -1;
        //Limpar
    }
    
    print(separator=' - ') {
        //imprime o conteúdo da janela atual
        //abre a caixa de diálogo Imprimir, que permite ao usuário selecionar as opções de impressão preferidas.
        let s = '';
        for(let i = this.top; i>=0 ; i--){
            s+=this.data[i]+separator;
        }
        return s.substring(0, s.length-separator.length);
    }
}