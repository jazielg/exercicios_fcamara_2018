/*
                        EXERCICIO 2

Elabore um algoritmo para mostrar os números primos existentes em um
intervalo.
O usuário deverá fornecer os valores inicial (inicial > 0) e final (inicial <
final) e os números primos existentes no intervalo ([inicial, final]) devem
ser separados por um espaço em branco.
*/

// Verificando se o número enviado é primo.
const verificaPrimo = numero => {
    for (let divisor = 2; divisor < numero-1; divisor++) {
        // Verifica se o numero tem divisão igual a 0 com os numeros abaixo dele.
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

// Validação dos números inseridos.
const validar = (inicial, final) => {
    if((inicial > final) || (inicial <= 0))
        return false
    return true
}

const numerosPrimos = (inicial, final) => {
    if(validar(inicial, final)) {
        let primos = new Array();
        for (let numero = inicial; numero <= final; numero++) {
            if (verificaPrimo(numero)) {
            	// Armazena o valor retornado em um Array
                primos.push(numero);
            }
        }
        // Transforma o array em uma string separada por espaço
        return primos.join(" ");
    }
    console.log('Erros de validação:\n1º Insira números positivo;\n2º O número final tem que ser maior que o número inicial.');
}

numerosPrimos(2,13);