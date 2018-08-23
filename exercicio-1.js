/* 
                        EXERCICIO 1

Um funcionário de uma empresa recebe, anualmente, aumento salarial.
Sabe-se que:
Esse funcionário foi contratado em 2005 com salário inicial de R$ 1.000,00;
Em 2006 ele recebeu aumento de 1,5% sobre seu salário inicial; e
A partir de 2007, os aumentos salariais sempre corresponderam ao dobro
do percentual do ano anterior.
Faça um algoritmo que determine o salário atual deste funcionário.
*/

let salarioInicial = 1000;
let anoInicial = 2005;
let anoFinal = 2018;

const aumento = porcentual => { 
	// Realiza a conta de porcentagem
	salarioInicial *= ((porcentual / 100) + 1);
	return salarioInicial;
}

const inicioDeAumento = () => {
	let anos = anoFinal - anoInicial;
	// percentual de aumento 1.5%
	let porcentual = 1.5;
	for(let cont = 1; cont <= anos; cont++) {
		// Armazena o valor retornado na variavel salarioAtual
		salarioAtual = aumento(porcentual);
		// DEBUG
		 console.log('ano de ' + (++anoInicial) + ' salário R$ ' + salarioAtual + ', aumento de ' + porcentual + '%');
		// Dobrando o percentual do ano anterior
		porcentual *= 2;
	}
	// Exibindo resultado final do salário
	console.log('Salario atual de R$ ' + salarioAtual.toFixed(2));
}

inicioDeAumento();