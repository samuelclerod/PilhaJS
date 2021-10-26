class StaticStack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    if (!this.isEmpty) {
      return this.data[this.data.length - 1];
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data;
  }

  clear() {
    this.data = [];
  }

  print(separator = " - ") {
    let output = "",
      index = this.data.length - 1;
    while (index >= 0) {
      output += separator + this.data[index];
      index--;
    }
    return output.substring(separator.length);
  }
}
