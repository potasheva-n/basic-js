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
    if(Number.isNaN(position) || position<=0 || !Number.isInteger(position)){
      this.chain =[];
      throw Error;
    }
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
    result = result+'( '+this.chain[this.chain.length-1]+' )';
    this.chain=[];
    return result;
  }
};

module.exports = chainMaker;

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');