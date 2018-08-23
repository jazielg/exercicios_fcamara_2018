/*
						EXERCICIO 6

Crie uma classe que modele um retângulo:
Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a
escolher)
Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e
calcular Perímetro;
Crie um programa que utilize esta classe. Ele deve pedir ao usuário que
informe as medidas de um local. Depois, deve criar um objeto com as med
*/

class Retangulo {
	constructor(base, altura){
		this._base = base;
		this._altura = altura;
	}

	alterarValor(base, altura) {
		this._base = base;
		this._altura = altura;
	}

	get valorDosLados() {
		return `Base de ${this._base} e altura de ${this._altura}`;
	}

	get calcularArea() {
		return this._base * this._altura;
	}

	get calcularPerimetro() {
		return 2 * (this._base + this._altura);
	}
}

let retangulo = new Retangulo(2,5);
retangulo.calcularArea;
retangulo.calcularPerimetro;
retangulo.alterarValor(10,2);
retangulo.valorDosLados;