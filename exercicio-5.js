/*
						EXERCICIO 5

Crie uma classe para implementar uma conta corrente. A classe deve
possuir os seguintes atributos: número da conta, nome do correntista e
saldo. Os métodos são os seguintes: alterarNome, depósito e saque; No
construtor, saldo é opcional, com valor default zero e os demais atributos
são obrigatórios.
*/

class ContaCorrente {
	constructor(numero, nome, saldo = 0) {
		this._numero = numero;
		this._nome = nome;
		this._saldo = saldo;
	}
	set alterarNome(novoNome){
		this._nome = novoNome;
	}

	set depositar(valor){
		this._saldo += valor;
	}

	set sacar(valor){
		this._saldo -= valor;
	}
}

let conta = new ContaCorrente('123456','Teste');
conta.alterarNome = 'Jaziel';
conta.depositar = 500;
conta.sacar = 100;