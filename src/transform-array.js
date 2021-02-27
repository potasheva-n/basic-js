const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr.length==undefined) throw Error;

  let res=[], a=arr.slice(); //копия массива
  for(let i=0; i<a.length; i++){
    if(a[i]=='--discard-next') { i++; a[i]=undefined; continue};
    if(a[i]=='--discard-prev') { if(a[i-1]!==undefined) res.pop(); continue};//если до этого выполнялась команда и ничего не попало в результат
    if(a[i]=='--double-next') { res.push(a[i+1]); continue};
    if(a[i]=='--double-prev') { res.push(a[i-1]); continue} ;
    res.push(a[i]);
  }
  return res.filter((item) => item !== undefined);
};
/*
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next doubles the next element of the array in the transformed array.
--double-prev doubles the previous element of the array in the transformed array.*/