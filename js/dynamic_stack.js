class DynamicStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    const newNode = new Node(element);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Pilha vazia!");
    const removed = this.top;
    this.top = this.top.next;
    removed.next = null;
    this.length--;
    return removed.content;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.content;
    }
  }

  isEmpty() {
    return this.top == null;
  }

  size() {
    return this.length;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  print(separator = " - ") {
    let output = "",
      current = this.top;
    while (current) {
      output += separator + current.content;
      current = current.next;
    }
    return output.substring(separator.length);
  }
}
