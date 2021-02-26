const CustomError = require("../extensions/custom-error");

module.exports = function countCats(m) {
  let res=[];
  res = res.concat(...m).filter((item, i, arr) => arr[i]=='^^');
  return res.length;
};
