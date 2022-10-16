const { NotImplementedError } = require("../extensions/index.js");

class Queue {
  constructor() {
    this.arr = [];
  }

  getUnderlyingList() {
    return arrayToList(this.arr);
    function arrayToList(array) {
      let list = null;
      for (let i = array.length - 1; i >= 0; i--)
        list = { value: array[i], next: list };
      return list;
    }
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }
}

module.exports = {
  Queue,
};
