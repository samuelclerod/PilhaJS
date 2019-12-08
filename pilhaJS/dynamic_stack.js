class DynamicStack {
    //declarando a classe DynamicStack

    constructor() {
        //O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe
        this.top = null;
        this.length = 0;
    }

    push(element) {
        //adiciona novos itens ao final de uma matriz e retorna o novo comprimento
        let newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.top==null) 
        //remove o último elemento de uma matriz e retorna esse elemento.
            return null;
        let deadNode = this.top;
        this.top = this.top.next;
        deadNode.next = null;
        this.length--;
        return deadNode.element;
    }

    peek() {
        //o método retorna o elemento na parte superior da pilha e retorna NULL se a pilha estiver vazia
        return this.top.element;
    }

    isEmpty() {
        //verifica se esta string está vazia ou não. Retorna true ,
        //se o comprimento da string for 0, caso contrário, false . Em outras palavras,
        //true será retornado se a string estiver vazia, caso contrário, retornará false
        return this.top==null;
    }

    size() {
        //Para saber quantos elementos está armazenados
        return this.length;
    }

    clear() {
        //remove todos os elementos de um objeto
        this.top= null;
        this.length=0;
    }

    print(separator = ' - ') {
        //imprime o conteúdo da janela atual
        //abre a caixa de diálogo Imprimir, que permite ao usuário selecionar as opções de impressão preferidas.
        let s = "";
        for(let node = this.top; node!=null ; node=node.next)
            s+=node.element+separator;
        return s.substring(0, s.length-separator.length);
    }
}