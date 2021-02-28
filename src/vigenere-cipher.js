const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct){
    if(direct===undefined) direct = true;
    this.direct = direct;
  }

  encrypt(message, key) {
    const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const s = [' ', '!', ',','?','-','.','+','*',':', '$', '@', '#', '%','^','=','(',')','&','|','/',';','1','2','3','4','5','6','7','8','9','0'];
    let m = message.toUpperCase().split(''),
        k = key.toUpperCase().split(''),
        result=[];
    for(let i=0, j=0; i<m.length; i++, j++){

      if(s.indexOf(m[i])!==-1){ result.push(m[i]); --j; continue;}

      result.push(abc[(abc.indexOf(m[i]) + abc.indexOf(k[j]))%26]);
      if(j+1 == k.length) j=-1;
    }
    return this.direct ? result.join(''):result.reverse().join('') ;
  }

  decrypt(message, key) {
    const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const s = [' ', '!', ',','?','-','.','+','*',':', '$', '@', '#', '%','^','=','(',')','&','|','/',';','1','2','3','4','5','6','7','8','9','0'];
    let m = message.toUpperCase().split(''),
        k = key.toUpperCase().split(''),
        result=[];
    for(let i=0, j=0; i<m.length; i++, j++){

      if(s.indexOf(m[i])!==-1){ result.push(m[i]); --j; continue;}

      result.push(abc[(abc.indexOf(m[i]) + 26 - abc.indexOf(k[j]))%26]);
      if(j+1 == k.length) j=-1;
    }
    return this.direct ? result.join(''):result.reverse().join('') ;
  }
}

module.exports = VigenereCipheringMachine;