const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res=[];
  if(!Array.isArray(members)) return false;
  res = members.filter( member => typeof member === 'string');
  res.forEach((member, i, arr)=>{
               let buf = arr[i].split ('').filter ((item)=>item!==' ');
               arr[i]=buf[0].toUpperCase();
               });

  return res.sort().join('');
};
