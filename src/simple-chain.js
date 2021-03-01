const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return chainMaker;
  },
  removeLink(position) {
    this.chain.splice(position-1,1)
    return chainMaker;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result='';
    for(let i=0; i<this.chain.length-1; i++){
      result=result+'( '+this.chain[i]+' )~~';
    }
    return result+'( '+this.chain[this.chain.length-1]+' )';
  }
};

module.exports = chainMaker;

//console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());