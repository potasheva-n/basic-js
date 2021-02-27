const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numberTurns = Math.pow(2, disksNumber) - 1; //число ходов
  let sec = Math.floor((numberTurns/turnsSpeed)*3600); //число секунд
  return {turns: numberTurns, seconds: sec };
};
