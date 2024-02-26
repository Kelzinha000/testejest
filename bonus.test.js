
const Bonus = require('./index');

describe('Testa a função Bonus', ()=>{

 test('Verifica se o bônus de 15% é adicionado', () => {
    // Declara o valor do salario
  const salario = 10000; 
  // Chama a função e adiciona o valor do salario 
  const salarioComBonus = Bonus(salario); 
  //  testa função Bonus 
  expect(salarioComBonus).toBe(11500);
 });
});