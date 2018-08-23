/*
						EXERCICIO 4

Faça um programa para uma loja de tintas. O programa deverá pedir o
tamanho em metros quadrados da área a ser pintada. Considere que a
cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é
vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a
quantidades de latas de tinta a serem compradas e o preço total.
*/

const valorDaTinta = metrosQuadrados => {
	// Calcula a quantidade de latas minimas necessaria para o tamanho da area.
	let quantidadeDeLatas = Math.ceil(metrosQuadrados / 54);
	// Calcula o valor final da tinta.
	let valor = quantidadeDeLatas * 80;
	return `São ${quantidadeDeLatas} latas de tintas no valor de R$ ${valor}`;
}

valorDaTinta(70);