const { NotImplementedError } = require("../extensions/index.js");

class Stack {
  constructor() {
    this.arr = [];
  }

  push(e) {
    this.arr.unshift(e);
  }

  peek() {
    return this.arr[0];
  }

  pop() {
    return this.arr.shift();
  }
}

module.exports = {
  Stack,
};
