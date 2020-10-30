var stack = new DynamicStack();

$().ready(function () {

    $('#push').on('click', pushElement);
    $('#item').keydown(function (e) {
        if (e.which == 13) pushElement();
    })
    $('#pop').on('click', popElement);
    $('#clear').on('click', clearStack);
});

function pushElement() {
    var item = $('#item').val();
    if (item) {
        stack.push(item);
        $('#item').val('');
        showStack();
    }
}

function popElement() {
    if (stack.isEmpty() == false) {
        alert('Foi removido o elemento ' + stack.pop());
        showStack();
    } else {
        alert('Pilha Vazia');
    }
}

function clearStack() {
    stack.clear();
    showStack();
}

function showStack() {
    renderOutput()
    renderSize()
    renderPeek()
}

function renderOutput(element) {
    $('#output').empty();
    $('#output').append(stack.print('<br />'));
}

function renderSize() {
    $('#stackSize').empty();
    $('#stackSize').append(stack.size());
}

function renderPeek() {
    $('#stackPeek').empty();
    $('#stackPeek').append(stack.peek());
}