class DynamicStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    const newNode = new Node(element);
    if (this.top)
      newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty())
      throw new Error("pilha vazia");
    const selected = this.top;
    this.top = selected.next;
    selected.next = null;
    this.length--;
    return selected.content;
  }

  peek() {
    if (!this.isEmpty())
      return this.top.content;

  }

  isEmpty() {
    return this.top === null
  }

  size() {
    return this.length;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  print(separator = ' - ') {
    let s = '';
    for (let i = this.top; i != null; i = i.next) {
      s += i.content + separator;
    }
    return s.substr(0, (s.length - separator.length));
  }

}