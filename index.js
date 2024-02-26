const { moduleExpression } = require("@babel/types");

function Bonus (salario) {
 const Bonus = salario * 0.15;
 return salario + Bonus; 
}

module.exports = Bonus;

