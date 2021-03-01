const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth=1, result=1;

    for(let i=0; i< arr.length; i++){
      if(Array.isArray(arr[i])){
        depth = 1+this.calculateDepth(arr[i]); //считаю глубину каждого вложенного элемента
      }
      if(depth>result) result=depth;          //если текущая глубина больше, заношу в результат
    }
    return result;                            //возвращаю наибольший результат
  }
};