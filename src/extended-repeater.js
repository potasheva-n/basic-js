const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res='', add='';

  if(options.separator === undefined) options.separator='+';
  if(options.additionSeparator===undefined) options.additionSeparator ='';
  if(options.addition===undefined) options.addition='';

  for(let i=0; i<options.additionRepeatTimes-1; i++){   //собираем add
    add=add+options.addition+options.additionSeparator;
  }
  add=add+options.addition;                             //последний add без разделителя

  for(let j=0; j<options.repeatTimes-1; j++){           //собираем результирующую строку
    res=res+str+add+options.separator;
  }
  return (options.repeatTimes===undefined)?str+options.addition: res+str+add; //если без повторений, то строка+add, иначе результирующая строка без разделителя
};