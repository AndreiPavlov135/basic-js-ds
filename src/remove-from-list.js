const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

function removeKFromList(l, k) {
  let goal = l;
  let before = null;

  while (l) {
    if (l.value === k) {
      if (before === null) {
        goal = l = l.next;
        continue;
      } else {
        before.next = l.next;
        l = l.next;
        continue;
      }
    }
    before = l;
    l = l.next;
  }
  return goal;
}

module.exports = {
  removeKFromList,
};
