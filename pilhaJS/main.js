var stack = new  DynamicStack();
//criando uma variavel stack que recebe a class dynamicStack

$().ready(function() {

    $('#push').on('click', pushElement);
    $('#item').keydown(function(e) {
        if (e.which == 13) pushElement();
    })
    $('#pop').on('click', popElement);
    $('#clear').on('click', clearStack);
    //As funções dos cliques inserir item, remover o item, limpar
});

function pushElement() {
    //Declarando a função do elemento inserir item, empilhar
    var item = $('#item').val();
    if (item) {
        stack.push(item);
        $('#item').val('');
        showStack();
    }
}

function popElement() {
    //Declarando a função do elemento remover item , desempilhar
    if (stack.isEmpty() == false) {
        alert('Foi removido o elemento ' + stack.pop());
        showStack();
    } else {
        alert('Pilha Vazia');
    }
}

function clearStack() {
    //Declarando a função do elemento limpar
    stack.clear();
    showStack();
}

function showStack() {
    //Declarando a função de mostrar pilha

    $('#output').empty();
    $('#stackSize').empty();
    $('#stackPeek').empty();
    $('#output').append(stack.print('<br />'));
    $('#stackSize').append(stack.size());
    $('#stackPeek').append(stack.peek());
}