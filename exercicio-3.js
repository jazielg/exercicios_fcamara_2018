/*
						EXERCICIO 3

Receba o número de horas trabalhadas por uma pessoa e o valor do
salário mínimo e mostre o salário a receber baseado nas seguintes regras:
A hora trabalhada equivale a 10% do salário mínimo informado;
O salário bruto é dado pelo número de horas trabalhadas multiplicado pelo
valor de cada hora;
O imposto pago é de 3%.
O salário a receber é equivalente ao salário bruto subtraído do imposto.
*/

const salarioAReceber = (horas, salarioMinimo) => {
	let salario = 0;
	// Acrescentado ao salario, 10% do salário minimo por cada hora.
	for(let contador = 1; contador <= horas; contador++) {
		salario += salarioMinimo * 0.1;
	}
	// imposto de 3% 
	return salario * 0.97;
}

salarioAReceber(1, 1000);