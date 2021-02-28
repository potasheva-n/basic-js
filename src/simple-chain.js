const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    return this.chain.push(value.toString());
  },
  removeLink(position) {
    return this.chain.splice(position);
  },
  reverseChain() {
    return this.chain.reverse();
  },
  finishChain() {
    const chainString = this.chain.map(el => {
      return el = '( ${el} )~~';
    });

    return chainString.join('');
  }
};

module.exports = chainMaker;
